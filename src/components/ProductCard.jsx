import Button from "./Button";

const ProductCard = ({ prod }) => {
  const { destino, imagen, descripcion, id } = prod;

  return (
    <div className="productoCard">
      <img
        src={imagen}
        className="productoImage"
        alt={destino}
        data-lazy-load
      />
      <div className="overlay">
        <h2>{destino}</h2>
        <p>{descripcion}</p>
        <Button to={`/productDetail/${id}`} text="Ver detalle" />
      </div>
    </div>
  );
};

export default ProductCard;
