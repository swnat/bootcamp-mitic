import React from "react";

import Layout from "../components/Layout";
import ProductTable from "../components/ProductTable";

const productos = [
  { id: 1, nombre: "Hamburguesa", precio: "20.000" },
  { id: 2, nombre: "Lomito Especial", precio: "25.000" },
  { id: 3, nombre: "Empanada de carne", precio: "5.000" },
  { id: 4, nombre: "Jugo de naranja", precio: "20.000" },
  { id: 5, nombre: "Jugo de manzana", precio: "25.000" },
  { id: 6, nombre: "Empanada de pollo", precio: "5.000" },
  { id: 7, nombre: "Hamburguesa de pollo", precio: "20.000" },
  { id: 8, nombre: "Lomito", precio: "25.000" },
  { id: 9, nombre: "Empanada napolitana", precio: "5.000" },
  { id: 10, nombre: "Cafe", precio: "20.000" },
  { id: 11, nombre: "Latte", precio: "25.000" },
  { id: 12, nombre: "Espresso", precio: "5.000" },
  { id: 13, nombre: "Nevado", precio: "20.000" },
  { id: 14, nombre: "Dona", precio: "25.000" },
  { id: 15, nombre: "Torta", precio: "5.000" },
];

const Productos = () => {
  return (
    <Layout
      rightEl={
        <>
          <h2 className="text-3xl font-bold">Productos</h2>
          <ProductTable products={productos} />
        </>
      }
    />
  );
};

export default Productos;
