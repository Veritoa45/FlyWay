import Button from "./Button";

const ProductCard = ({ product }) => {
  return (
    <div className="productoCard">
      <img
        src={product.imagen}
        className="productoImage"
        alt={product.destino}
        data-lazy-load
      />
      <div className="overlay">
        <h2>{product.destino}</h2>
        <p>{product.descripcion}</p>
        <Button to={`/products/${product.id}`} text="Ver detalle" />
      </div>
    </div>
  );
};

export default ProductCard;
