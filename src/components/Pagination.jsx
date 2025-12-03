const Pagination = ({ total, pageSize, page, onPage }) => {
  const totalPages = Math.ceil(total / pageSize);
  return (
    <nav aria-label="Paginación de productos">
      <button onClick={() => onPage(page - 1)} disabled={page === 1}>
        Anterior
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button onClick={() => onPage(page + 1)} disabled={page === totalPages}>
        Siguiente
      </button>
    </nav>
  );
};

export default Pagination;
