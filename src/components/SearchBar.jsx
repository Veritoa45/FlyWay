import { useEffect, useState } from "react";

const SearchBar = ({ onChange }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const id = setTimeout(() => onChange(value), 250);
    return () => clearTimeout(id);
  }, [value, onChange]);
  return (
    <div className="center">
      <input
        type="search"
        placeholder="Buscar por nombre o categoría"
        aria-label="Buscar productos"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search"
      />
    </div>
  );
};

export default SearchBar;
