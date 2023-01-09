import { useState } from "react"
import {HomeIcon, FireIcon, BellIcon, CreditCardIcon, UserIcon, CircleStackIcon } from "@heroicons/react/24/outline"

import Orders from "./components/Orders"
import "./App.css"

function App() {
  const [orders, setOrders] = useState([])

  function addOrder(order) {
    setOrders(prevState => [...prevState, order])
  }

  return (
    <main className="flex flex-col h-full">
      <nav className="relative flex py-2 px-4 text-white bg-dark flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-lg">Coffee Shop</p>
        </div>

        <div className="menuItems flex items-center">
          <button className="btn menuItem active">
            <HomeIcon className="text-gray h-4 w-4" />
          </button>
          <button className="btn menuItem">
            <CreditCardIcon className="text-gray h-4 w-4" />
          </button>
          <button className="btn menuItem">
            <FireIcon className="text-gray h-4 w-4" />
          </button>
          <button className="btn menuItem">
            <CircleStackIcon className="text-gray h-4 w-4" />
          </button>
          <button className="btn menuItem">
            <BellIcon className="text-gray h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-1">
            <UserIcon className="text-gray h-4 w-4" /> 
          <span>
          Carlos
          </span>
        </div>
      </nav>
      <div className="h-[90%] p-2 grow-1">
        <Orders handleAddOrder={addOrder} />
      </div>
    </main>
  )
}

export default App
