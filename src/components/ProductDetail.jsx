import { useCart } from "../context/CartContext";
import Button from "./Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ product }) => {
  const { addItem } = useCart();

  if (!product) return null;

  return (
    <div className="productDetail">
      <img src={product.imagen} alt={product.name} />
      <div className="product-detail-info">
        <h2 className="title">{product.destino}</h2>
        <div className="product-description-full">
          <p>{product.descripcion}</p>
          {product.caracteristicas && (
            <>
              <h3>Características</h3>
              <p>{product.caracteristicas.join(" - ")}</p>
            </>
          )}
        </div>
        <h3>Precio U$S {product.precio}</h3>
        <div className="inLine">
          <button onClick={() => addItem(product)} className="button">
            Agregar al carrito
          </button>
          <Button to="/" text="Volver" />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProductDetail;
