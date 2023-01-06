import { useState } from "react"

import Orders from "./components/Orders"
import "./App.css"

function App() {
  const [orders, setOrders] = useState([])

  function addOrder(order) {
    setOrders(prevState => [...prevState, order])
  }

  console.table(orders)

  return (
    <main className="d-flex flex-column h-100">
      <nav className="navbar navbar-dark bg-dark d-flex align-items-center p-2">
        <div className="d-flex align-items-center">
          <p className="navbar-brand">Coffee Shop</p>
        </div>

        <div className="menuItems d-flex align-items-center">
          <button className="btn menuItem">
            <i className="bi bi-house"></i>
          </button>
          <button className="btn menuItem active">
            <i className="bi bi-card-checklist"></i>
          </button>
          <button className="btn menuItem">
            <i className="bi bi-fire"></i>
          </button>
          <button className="btn menuItem">
            <i className="bi bi-database"></i>
          </button>
          <button className="btn menuItem">
            <i className="bi bi-bell"></i>
          </button>
        </div>

        <div className="d-flex align-items-center">
          <span className="text-muted-dark">
            <i className="bi bi-person"></i> Carlos
          </span>
        </div>
      </nav>
      <div className="h-90 p-2 flex-grow-1">
        <Orders handleAddOrder={addOrder} />
      </div>
    </main>
  )
}

export default App
