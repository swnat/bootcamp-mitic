import React, { useMemo } from "react";

const TablePagination = ({ rowsPerPage, onPageChange, page, count, className = "" }) => {
  const numOfPages = useMemo(
    () => (count < rowsPerPage ? 1 : Math.ceil(count / rowsPerPage)),
    [count, rowsPerPage]
  );

  const handleNextPage = (e) => {
    onPageChange(e, page + 1);
  };

  const handlePreviousPage = (e) => {
    onPageChange(e, page - 1);
  };

  return (
    <div className={`flex gap-3 justify-end ${className}`}>
      <button
        onClick={handlePreviousPage}
        disabled={page === 1}
        className="bg-orange-600 rounded-lg py-1 px-2 disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        {page} of {numOfPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={page === numOfPages}
        className="bg-orange-600 rounded-lg py-1 px-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default TablePagination;
