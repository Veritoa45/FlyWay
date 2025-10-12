import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacto = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (errors.name) toast.error(errors.name.message);
    if (errors.phone) toast.error(errors.phone.message);
    if (errors.mail) toast.error(errors.email.message);
    if (errors.messages) toast.error(errors.messages.message);
  }, [errors]);

  const sendEmail = async (data) => {
    try {
      toast.dismiss();
      reset();

      Swal.fire({
        title: "¡Consulta enviada correctamente!",
        text: "Te contactaremos pronto.",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#4caf50",
      });
    } catch (error) {
      console.error("ERROR:", error);
      toast.error("No se pudo enviar el formulario. Intentá nuevamente.");
    }
  };

  return (
    <section className="form">
      <h2>Dejanos tu consulta</h2>
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="formContent"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          {...register("name", {
            required: "Por favor, ingrese su nombre.",
            minLength: {
              value: 4,
              message: "El nombre debe tener al menos 4 caracteres.",
            },
          })}
        />
        <input
          type="email"
          name="mail"
          placeholder="ejemplo@mail.com"
          {...register("email", {
            required: "Por favor, ingrese su mail.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Ingrese un mail válido.",
            },
          })}
        />
        <input
          type="tel"
          name="phone"
          placeholder="1144445555"
          {...register("phone", {
            required: "Por favor, ingrese su número de teléfono.",
            minLength: {
              value: 10,
              message: "El teléfono debe tener al menos 10 dígitos.",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "El teléfono solo debe contener números.",
            },
          })}
        />
        <div className="formGroup">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            name="messages"
            placeholder="Describe tu consulta aqui..."
            rows="6"
            {...register("messages", {
              required: "Por favor escriba un mensaje",
              minLength: {
                value: 15,
                message: "El mensaje debe tener al menos 15 caracteres.",
              },
            })}
          />
        </div>
        <button type="submit" className="button">
          Enviar
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contacto;
