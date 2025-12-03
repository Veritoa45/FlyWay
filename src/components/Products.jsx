import { useState, useEffect } from "react";
import ProductContainer from "./ProductContainer.jsx";
import Loader from "./Loader.jsx";
import { getDestinos } from "../services/api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getDestinos()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("No se pudieron cargar los productos");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section>
      <ProductContainer products={products} />
    </section>
  );
};

export default Products;
