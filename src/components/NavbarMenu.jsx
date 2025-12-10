import { NavLink } from "react-router-dom";
import Logo from "../../public/Logo.png";
import { useAuth } from "../context/AuthContext";

const NavbarMenu = () => {
  const { user, logout } = useAuth();

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
        {user?.role === "admin" && (
          <>
            <NavLink
              to="/products/new"
              className={({ isActive }) =>
                isActive ? "navItem active" : "navItem"
              }
            >
              Agregar producto
            </NavLink>
            <NavLink
              to="/products/productList"
              className={({ isActive }) =>
                isActive ? "navItem active" : "navItem"
              }
            >
              Modificar producto
            </NavLink>
          </>
        )}
        {user ? (
          <button onClick={logout} className="navItem">
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavbarMenu;
