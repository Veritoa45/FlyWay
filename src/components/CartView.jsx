import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const CartView = ({
  cart = [],
  clearCart,
  totalItems,
  totalPrice,
  removeItem,
}) => {
  console.log("CartView ejecutándose. clearCart =", clearCart);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

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

  const confirmarCompra = () => {
    console.log("Terminar compra, clearCart =", clearCart);

    Swal.fire({
      title: "¡Compra realizada con éxito!",
      text: "Gracias por elegir Flyway ✈️",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#4caf50",
    }).then(() => {
      clearCart();
    });
  };

  return (
    <div className="cartView">
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
            <td className="bold">{totalItems}</td>
            <td className="bold">U$S {totalPrice}</td>
          </tr>
        </tfoot>
      </table>

      <div className="lineBlock">
        <div onClick={confirmClearCart} className="button">
          Vaciar carrito
        </div>
        <div onClick={confirmarCompra} className="button">
          Terminar compra
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default CartView;
