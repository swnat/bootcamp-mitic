import { useState } from "react";
import {
  HomeIcon,
  CakeIcon,
  UserGroupIcon,
  UserCircleIcon,
  InboxStackIcon,
} from "@heroicons/react/24/outline";

import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Orders from "./components/Orders";
import Usuarios from "./pages/usuarios";
import Productos from "./pages/productos";

const navItems = [
  {
    to: "/",
    Icon: HomeIcon,
  },
  {
    to: "/orders",
    Icon: InboxStackIcon,
  },
  {
    to: "/administrador/productos",
    Icon: CakeIcon,
  },
  {
    to: "/administrador/usuarios",
    Icon: UserGroupIcon,
  },
];

const baseNavItemStyles = [
  "text-gray",
  "hover:text-white",
  "rounded-2xl",
  "px-2.5",
  "py-1.5",
  "bg-darkgray",
].join(" ");

const Navigation = () => {
  return (
    <div className="menuItems flex items-center gap-2">
      {navItems.map(({ to, Icon }) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${baseNavItemStyles} !bg-orange-600 !text-white`
              : `${baseNavItemStyles} hover:text-white`
          }
          to={to}
          key={to}
        >
          <Icon className="h-4 w-4" />
        </NavLink>
      ))}
    </div>
  );
};

function App() {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders((prevState) => [...prevState, order]);
  }

  return (
    <main className="flex flex-col h-full text-white">
      <nav className="relative flex py-2 px-4 text-white bg-dark flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-lg">Coffee Shop</p>
        </div>

        <Navigation />

        <div className="flex items-center gap-1">
          <UserCircleIcon className="text-gray h-4 w-4" />
          <span>Carlos</span>
        </div>
      </nav>
      <div className="h-[90%] p-2 grow-1">
        <Routes>
          <Route
            path="/orders"
            element={<Orders handleAddOrder={addOrder} />}
          />
          <Route path="/administrador/usuarios" element={<Usuarios />} />
          <Route path="/administrador/productos" element={<Productos />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
