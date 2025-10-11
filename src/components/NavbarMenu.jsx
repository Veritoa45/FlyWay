import { NavLink } from "react-router-dom";
import Logo from "../../public/Logo.png";

const NavbarMenu = () => {
  return (
    <nav className="navContainer">
      <NavLink to="/" className="logo">
        <img src={Logo} alt="Logo" className="image_logo" data-lazy-load />
      </NavLink>
      <div className="navMenu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navItem active" : "navItem"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            isActive ? "navItem active" : "navItem"
          }
        >
          Carrito
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive ? "navItem active" : "navItem"
          }
        >
          Contacto{" "}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarMenu;
