import ProductCard from "./ProductCard.jsx";

const ProductContainer = ({ products }) => {
  return (
    <div className="container">
      <h1 className="sectionTitle">Destinos</h1>
      <div className="productosGrid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
