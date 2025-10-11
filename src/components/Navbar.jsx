import { useState, useEffect } from "react";
import NavbarResponsive from "./NavbarResponsive";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <nav className="navbar">
          <NavbarResponsive />
        </nav>
      ) : (
        <nav className="navbar">
          <NavbarMenu />
        </nav>
      )}
    </>
  );
};

export default Navbar;
