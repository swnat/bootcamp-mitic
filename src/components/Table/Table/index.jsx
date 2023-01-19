import React from "react";

function Table({ headers, children, className = "", ...restProps }) {
  return (
    <table
      className={`table-auto border-separate border-spacing-y-2 w-full ${className}`}
      {...restProps}
    >
      <thead>
        <tr>
          {headers.map((header) => {
            return <td key={header}>{header}</td>;
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
