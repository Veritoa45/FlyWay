import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDestino, updateDestino } from "../services/api";
import Swal from "sweetalert2";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    destino: "",
    categorias: "",
    imagen: "",
    descripcion: "",
    precio: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("ID recibido:", id);

        const item = await getDestino(id);

        console.log("Destino encontrado:", item);

        setForm(item);
      } catch (err) {
        Swal.fire("Error", "No se encontró el destino", "error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDestino(id, form);
      await Swal.fire({
        title: "¡Destino actualizado!",
        text: "Los cambios se guardaron correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      navigate("/products/productList");
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar el destino.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="container">
      <h2>Editar Destino</h2>
      <form onSubmit={handleSubmit} className="formContent">
        <input name="destino" value={form.destino} onChange={handleChange} />
        <input name="imagen" value={form.imagen} onChange={handleChange} />
        <input name="precio" value={form.precio} onChange={handleChange} />
        <div className="formGroup">
          <label htmlFor="message">Descripción *</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            rows="3"
            onChange={handleChange}
          />
        </div>
        <input
          name="categorias"
          value={form.categorias}
          onChange={handleChange}
        />
        <button type="submit" className="button2">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
