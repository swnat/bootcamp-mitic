import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Table, { TableCell, TablePagination } from "./Table";

const headers = ["Nombre", "Precio", "Acciones"];

const rowsPerPage = 10;

const ProductTable = ({ products }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <Table headers={headers}>
        {products
          .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage )
          .map((producto) => (
            <tr key={producto.id}>
              <TableCell className="w-3/5">{producto.nombre}</TableCell>
              <TableCell className="w-1/5">{producto.precio}</TableCell>
              <TableCell className="w-1/5">
                <div className="flex gap-2 text-white">
                  <button
                    type="submit"
                    className="flex gap-1 bg-blue-500 rounded p-2"
                  >
                    <PencilIcon className="h-4 w-4 self-center" />
                    <span>Editar</span>
                  </button>
                  <button
                    type="submit"
                    className="flex gap-1 bg-red-500 rounded p-2"
                  >
                    <TrashIcon className="h-4 w-4 self-center" />
                    <span>Borrar</span>
                  </button>
                </div>
              </TableCell>
            </tr>
          ))}
      </Table>
      <TablePagination
        count={products.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductTable;
