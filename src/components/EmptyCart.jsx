import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container">
      <h2>Tu carrito está vacío</h2>
      <div className="emptyCart">
        <img src="/emptyCart.png" alt="Carrito Vacío" />
      </div>
      <Link to={"/"} className="button">
        Agregar productos
      </Link>
    </div>
  );
};

export default EmptyCart;
