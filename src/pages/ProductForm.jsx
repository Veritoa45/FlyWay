import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createDestino } from "../services/api";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createDestino({ ...data, price: +data.price });
      toast.success("Producto creado con éxito");
      reset();
    } catch (err) {
      toast.error("Error al crear producto: " + err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Nombre */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        {/* Precio */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            {...register("price", {
              required: "El precio es obligatorio",
              min: { value: 1, message: "El precio debe ser mayor a 0" },
            })}
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price.message}</div>
          )}
        </div>

        {/* Descripción */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <textarea
            id="description"
            rows="3"
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            {...register("description", {
              required: "La descripción es obligatoria",
              minLength: {
                value: 10,
                message: "Debe tener al menos 10 caracteres",
              },
            })}
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>

        {/* Categoría opcional */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categoría
          </label>
          <input
            id="category"
            type="text"
            className="form-control"
            {...register("category")}
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Guardando..." : "Guardar Producto"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
