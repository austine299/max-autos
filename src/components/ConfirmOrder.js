import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";


function ConfirmOrder() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleSendToWhatsApp = async () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Order Summary", 10, 10);
      doc.setFontSize(12);
      let y = 20;

      for (const item of cartItems) {
        const img = new Image();
        img.src = `${process.env.PUBLIC_URL}/images/${item.image}`;

        await new Promise((resolve, reject) => {
          img.onload = () => {
            doc.addImage(img, "JPEG", 10, y, 30, 30);
            resolve();
          };
          img.onerror = () => {
            console.error("Error loading image:", item.image);
            console.error("Image URL:", img.src);
            console.error("Item:", item);
            resolve(); // Continue with the next item
          };
        });

        doc.text(`${item.name} x ${item.quantity}`, 45, y + 15);
        y += 40;
      }

      doc.text(`Customer Name: ${name}`, 10, y + 10);
      doc.text(`Phone Number: ${phone}`, 10, y + 20);
      doc.save("order-summary.pdf");

      const baseUrl = process.env.REACT_APP_BASE_URL;
      const num = process.env.REACT_APP_MOBILE;

 
       const orderMessage =
      `🛒 *New Order:*\n` +
      cartItems
        .map((item) => `${baseUrl}product/${item.id} \n` + `${item.name} \t(x${item.quantity})\n`)

        .join("\n") +
      `\n\n*Name:* ${name}\n*Phone:* ${phone}`;

    const whatsappURL = `https://wa.me/${num}?text=${encodeURIComponent(
      orderMessage
    )}`;
    window.open(whatsappURL, "_blank");



      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Error generating PDF or sending WhatsApp message:", error);
    }
  };

  return (
    <div className="p-8 mt-32 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Confirm Order</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mt-6">
        <button
          disabled={!name || !phone}
          onClick={handleSendToWhatsApp}
          className="w-full px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-500 disabled:opacity-50"
        >
          Send Order via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ConfirmOrder;
