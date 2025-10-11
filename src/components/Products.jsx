import { useState, useEffect } from "react";
import ProductContainer from "./ProductContainer.jsx";
import Loader from "./Loader.jsx";
import { getAllDestinations } from "../mock/AsyncMock";

const Products = () => {
  const [destinos, setDestinos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllDestinations()
      .then((res) => {
        setDestinos(res);
      })
      .catch((error) => console.error("Error fetching destinations:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      {loading ? <Loader /> : <ProductContainer destinos={destinos} />}
    </section>
  );
};

export default Products;
