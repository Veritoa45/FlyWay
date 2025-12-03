import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestino } from "../services/api";
import ProductDetail from "../components/ProductDetail";
import NoExistProduct from "../components/NoExistProduct";
import Loader from "../components/Loader";

const ProductDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDestino(id)
      .then((p) => {
        if (p) {
          setProduct(p);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : !error ? (
        <ProductDetail product={product} />
      ) : (
        <NoExistProduct />
      )}
    </>
  );
};

export default ProductDetailContainer;
