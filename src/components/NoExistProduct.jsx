import Button from "./Button";

const NoExistProduct = () => {
  return (
    <div className="noProducts">
      <img src="/Oops.png" alt="Producto no encontrado" />
      <Button to={"/"} text="Volver" />
    </div>
  );
};

export default NoExistProduct;
