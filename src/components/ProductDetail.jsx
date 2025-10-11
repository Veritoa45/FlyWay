import Button from "./Button";

const ProductDetail = ({ destino }) => {
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
        <Button to="/" text="Volver" />
      </div>
    </div>
  );
};

export default ProductDetail;
