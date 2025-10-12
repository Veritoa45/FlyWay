import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartView = ({
  cart = [],
  clearCart,
  totalItems,
  totalPrice,
  removeItem,
}) => {
  if (cart.length === 0) return <EmptyCart />;

  const confirmClearCart = () => {
    toast.custom((t) => (
      <div className="toastConfirm">
        <p>¿Estás segur@ de vaciar el carrito?</p>
        <div className="toastButtons">
          <button
            onClick={() => {
              clearCart();
              toast.dismiss(t.id);
            }}
            className="btn"
          >
            Sí
          </button>
          <button onClick={() => toast.dismiss(t.id)} className="btn">
            No
          </button>
        </div>
      </div>
    ));
  };

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <div className="cartView">
      <h2>Tu carrito</h2>
      <table className="table">
        <thead className="head">
          <tr>
            <th>Destino</th>
            <th>Cantidad</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem key={item.id} compra={item} removeItem={removeItem} />
          ))}
        </tbody>
        <tfoot>
          <tr className="head">
            <th className="bold">Total</th>
            <td className="bold">{totalItems()}</td>
            <td className="bold">U$S {totalPrice()}</td>
          </tr>
        </tfoot>
      </table>

      <div className="lineBlock">
        <div onClick={confirmClearCart} className="button">
          Vaciar carrito
        </div>
        <div className="button">Terminar compra</div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default CartView;
