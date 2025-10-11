import ProductCard from "./ProductCard.jsx";

const ProductContainer = ({ destinos }) => {
  return (
    <div className="container">
      <h1 className="sectionTitle">Destinos</h1>
      <div className="productosGrid">
        {destinos.map((des) => (
          <ProductCard key={des.id} prod={des} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
