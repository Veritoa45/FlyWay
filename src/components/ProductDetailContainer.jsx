import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../mock/AsyncMock";
import ProductDetail from "./ProductDetail";
import NoExistProduct from "./NoExistProduct";
import Loader from "./Loader";

const ProductDetailContainer = () => {
  const { id } = useParams();
  const [destino, setDestino] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDestinationById(id)
      .then((d) => {
        if (d) {
          setDestino(d);
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
        <ProductDetail destino={destino} />
      ) : (
        <NoExistProduct />
      )}
    </>
  );
};

export default ProductDetailContainer;
