import Button from "./Button";

const ErrorPage = () => {
  return (
    <div className="noProducts">
      <img src="/404.png" alt="Producto no encontrado" />
      <Button to={"/"} text="Volver" />
    </div>
  );
};

export default ErrorPage;
