import { Icon } from "@iconify/react";

const CartItem = ({ compra, removeItem }) => {
  const { id, destino, precio, quantity } = compra;

  return (
    <tr className="fila">
      <td className="space">{destino}</td>
      <td className="space">{quantity}</td>
      <td className="space">U$S {precio * quantity}</td>
      <td className="space">
        <Icon
          icon="mynaui:trash"
          onClick={() => removeItem(id)}
          className="trash"
        />
      </td>
    </tr>
  );
};

export default CartItem;
