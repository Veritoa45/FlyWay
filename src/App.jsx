import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductDetailContainer from "./components/ProductDetailContainer";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/carrito"} element={<Cart />} />
        <Route path="/productDetail/:id" element={<ProductDetailContainer />} />
        <Route path={"/contacto"} element={<Contact />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
