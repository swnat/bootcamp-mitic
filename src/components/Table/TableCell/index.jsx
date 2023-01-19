import React from "react";

const TableCell = ({ children, className = "" }) => {
  return <td className={`mb-2 p-2 bg-darkgray first:rounded-l-lg last:rounded-r-lg ${className}`}>{children}</td>;
};

export default TableCell;
