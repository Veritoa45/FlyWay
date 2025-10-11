import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Carrito from "./components/Carrito";
import ProductDetailContainer from "./components/ProductDetailContainer";
import Contacto from "./components/Contacto";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/carrito"} element={<Carrito />} />
        <Route path="/productDetail/:id" element={<ProductDetailContainer />} />
        <Route path={"/contacto"} element={<Contacto />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
