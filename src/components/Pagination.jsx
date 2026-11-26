import "./Files-Css/Pagination.css";
const Pagination = ({ currentPage, totalPage, setCurrentPage }) => {
  return (
    <div>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span>
          {currentPage} of {totalPage}
        </span>

        <button
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
