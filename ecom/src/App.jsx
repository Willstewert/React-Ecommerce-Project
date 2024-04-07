import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Products";
import Navbar from "./Components/Navbar";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/SingleProduct/:id" element={<SingleProduct></SingleProduct>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
