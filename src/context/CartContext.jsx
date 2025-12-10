import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("flyway_cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("flyway_cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  const addItem = (destino) => {
    let message = "";

    setCart((prev) => {
      const existing = prev.find((item) => item.id === destino.id);
      if (existing) {
        message = `Cantidad de ${destino.destino} actualizada`;
        return prev.map((item) =>
          item.id === destino.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      message = `${destino.destino} agregado al carrito ✅`;
      return [...prev, { ...destino, quantity: 1 }];
    });

    if (message.includes("actualizada")) {
      toast.info(message);
    } else {
      toast.success(message);
    }
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
    toast.warn("Destino eliminado del carrito");
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
