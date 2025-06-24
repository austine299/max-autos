import Home from "./components/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetails";
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/product/:id" element ={<ProductDetail/>}/>
        <Route path="/cart" element ={<Cart/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
