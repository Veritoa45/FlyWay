import { useCart } from "../context/CartContext";
import EmptyCart from "../components/EmptyCart";
import CartView from "../components/CartView";

const Cart = () => {
  const { cart, totalItems, totalPrice, removeItem, clear } = useCart();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="container mt-4">
      <h2>Tu carrito</h2>
      <CartView
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        removeItem={removeItem}
        clear={clear}
      />
    </div>
  );
};

export default Cart;
