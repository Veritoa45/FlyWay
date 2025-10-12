import { useState } from "react";
import Button from "./Button";
import CartView from "./CartView";
import EmptyCart from "./EmptyCart";

const ProductDetail = ({ destino }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const totalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = () =>
    cart.reduce((total, item) => total + item.precio * item.quantity, 0);

  if (!destino) return null;

  return (
    <div className="productDetail">
      <img src={destino.imagen} alt={destino.destino} />
      <div className="product-detail-info">
        <h2 className="title">{destino.destino}</h2>
        <div className="product-description-full">
          <p>{destino.descripcion}</p>
          <h3>Características</h3>
          <p>{destino.caracteristicas.join(" - ")}</p>
        </div>
        <h3>Precio U$S {destino.precio}</h3>
        <div className="inLine">
          <button onClick={() => addToCart(destino)} className="button">
            Agregar al carrito
          </button>
          <Button to="/" text="Volver" />
        </div>
      </div>

      <div className="cartSection">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartView
            cart={cart}
            totalItems={totalItems}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
