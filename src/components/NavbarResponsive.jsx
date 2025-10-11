import { useState } from "react";
import Logo from "../../public/Logo.png";
import { NavLink } from "react-router-dom";

const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navContainer">
      <NavLink to="/" className="logo">
        <img src={Logo} alt="Logo" className="image_logo" data-lazy-load />
      </NavLink>
      <div className="hamburger">
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isOpen && (
        <div className={`navMenu mobile${isOpen ? " active" : ""}`}>
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
            Contacto
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavbarResponsive;
