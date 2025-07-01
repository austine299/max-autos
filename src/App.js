import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetails";
import Cart from './components/Cart'
import ConfirmOrder from "./components/ConfirmOrder";

function App() {
  return (
    <div className="App">
     <Router >
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/product/:id" element ={<ProductDetail/>}/>
        <Route path="/cart" element ={<Cart/>}/>
        <Route path="/confirmOrder" element ={<ConfirmOrder/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
