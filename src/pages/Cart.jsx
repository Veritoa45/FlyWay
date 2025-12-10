import { useCart } from "../context/CartContext";
import EmptyCart from "../components/EmptyCart";
import CartView from "../components/CartView";

const Cart = () => {
  const { cart, totalItems, totalPrice, removeItem, clearCart } = useCart();

  if (cart.length === 0) return <EmptyCart />;

  console.log("Cart (pages):", cart);
  console.log("clearCart (pages):", clearCart);

  return (
    <div className="container">
      <h2>Tu carrito</h2>
      <CartView
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        removeItem={removeItem}
        clearCart={clearCart}
      />
    </div>
  );
};

export default Cart;
