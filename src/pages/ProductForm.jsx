import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createDestino } from "../services/api";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  useEffect(() => {
    if (errors.destino?.message) toast.error(errors.destino.message);
  }, [errors.destino]);

  useEffect(() => {
    if (errors.precio?.message) toast.error(errors.precio.message);
  }, [errors.precio]);

  useEffect(() => {
    if (errors.descripcion?.message) toast.error(errors.descripcion.message);
  }, [errors.descripcion]);

  useEffect(() => {
    if (errors.categorias?.message) toast.error(errors.categorias.message);
  }, [errors.categorias]);

  const onSubmit = async (data) => {
    try {
      await createDestino({ ...data, precio: +data.precio });
      reset();

      Swal.fire({
        title: "¡Destino creado con éxito!",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#4caf50",
      });
    } catch (error) {
      console.error("ERROR:", error);
      toast.error("No se pudo crear el destino. Intentá nuevamente.");
    }
  };

  return (
    <div className="container">
      <h2>Agregar Producto</h2>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="formContent"
      >
        <input
          id="destino"
          type="text"
          placeholder="Nombre del destino"
          {...register("destino", {
            required: "Por favor, ingrese el destino.",
            minLength: {
              value: 4,
              message:
                "El nombre del destino debe tener al menos 4 caracteres.",
            },
          })}
        />
        <input
          id="precio"
          type="text"
          placeholder="Indica el precio"
          {...register("precio", {
            required: "El precio es obligatorio",
            min: { value: 1, message: "El precio debe ser mayor a 0" },
          })}
        />
        <input
          id="imagen"
          type="text"
          placeholder="Ruta de la imagen"
          {...register("imagen", {
            required: "La ruta de la imagen es obligatoria",
            minLength: {
              value: 5,
              message: "La ruta parece demasiado corta",
            },
          })}
        />
        <div className="formGroup">
          <label htmlFor="message">Descripción *</label>
          <textarea
            id="descripcion"
            placeholder="Describe el destino"
            rows="3"
            {...register("descripcion", {
              required: "La descripción es obligatoria",
              minLength: {
                value: 10,
                message: "La descripción debe tener al menos 10 caracteres",
              },
            })}
          />
        </div>
        <input
          id="categorias"
          type="text"
          placeholder="Categoría"
          {...register("categorias", {
            required: "La categoría es obligatoria",
            minLength: {
              value: 5,
              message: "La categoría debe tener al menos 5 caracteres",
            },
          })}
        />
        <button type="submit" className="button2" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : "Guardar Producto"}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProductForm;
