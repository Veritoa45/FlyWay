import { NavLink } from "react-router-dom";

const Button = ({ to, text }) => {
  return (
    <>
      <NavLink to={to} className="button">
        {text}
      </NavLink>
    </>
  );
};

export default Button;
