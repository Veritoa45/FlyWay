import { useState } from "react";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ProductTable = ({ products, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar destino?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      onDelete(id);

      Swal.fire({
        toast: true,
        icon: "success",
        title: "Destino eliminado con éxito",
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="productTable">
      <table className="table">
        <thead className="head">
          <tr>
            <th>Imagen</th>
            <th>Destino</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product.id} className="head">
              <td>
                <img
                  src={product.imagen}
                  alt={product.destino}
                  className="imagen-tabla"
                />
              </td>
              <td>{product.destino}</td>
              <td>U$S {product.precio}</td>
              <td>
                <button
                  onClick={() => onEdit(product)}
                  className="buttonProduct"
                >
                  <Icon icon="mage:pen" width="24" height="24" />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="buttonProduct"
                >
                  <Icon icon="heroicons:trash" width="24" height="24" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
