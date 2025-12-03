import { useState } from "react";
import Logo from "../../public/Logo.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="navContainer">
      <NavLink to="/" className="logo">
        <img
          src={Logo}
          alt="Logo"
          className="image_logo"
          data-lazy-load
          onClick={() => setIsOpen(false)}
        />
      </NavLink>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navMenu mobile${isOpen ? " active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navItem active" : "navItem"
          }
          onClick={() => setIsOpen(false)}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            isActive ? "navItem active" : "navItem"
          }
          onClick={() => setIsOpen(false)}
        >
          Carrito
        </NavLink>

        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive ? "navItem active" : "navItem"
          }
          onClick={() => setIsOpen(false)}
        >
          Contacto
        </NavLink>

        {user?.role === "admin" && (
          <NavLink
            to="/products/new"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
            onClick={() => setIsOpen(false)}
          >
            Nuevo producto
          </NavLink>
        )}

        {user ? (
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="navItem"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavbarResponsive;
