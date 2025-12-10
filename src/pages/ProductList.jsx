import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";
import { deleteDestino, getDestinos } from "../services/api";
import Loader from "../components/Loader.jsx";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filtered, setFiltered] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getDestinos()
      .then((res) => {
        setProducts(res);
        setFiltered(res);
      })
      .catch((err) => {
        setError("No se pudieron cargar los productos");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-danger">{error}</p>;

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFiltered(products);
      return;
    }
    const lower = query.toLowerCase();
    const results = products.filter(
      (p) =>
        p.destino.toLowerCase().includes(lower) ||
        (p.categoria && p.categoria.toLowerCase().includes(lower))
    );
    setFiltered(results);
  };

  const handleEdit = (product) => {
    navigate(`/products/${product.id}/edit`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDestino(id);

      const updated = products.filter((p) => p.id !== id);

      setProducts(updated);
      setFiltered(updated);
    } catch (error) {
      console.error("Error eliminando destino:", error);
    }
  };

  return (
    <div className="container">
      <SearchBar onChange={handleSearch} />
      <ProductTable
        products={filtered}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProductList;
