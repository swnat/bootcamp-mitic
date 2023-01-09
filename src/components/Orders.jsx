import { useState } from 'react'
import Order from "./Order";
import Menu from "./Menu";

const orderInitialState = {
  items: [],
  total: 0
}

const Orders = ({handleAddOrder}) => {
  const [order, setOrder] = useState(orderInitialState);

  const addItemToOrder = (product) => {
    const productInOrder = order.items.find(item => item.product.id === product.id)
    if(productInOrder) {
      setOrder({
        items: order.items.map(item => {
          if(item.product.id === productInOrder.product.id){
            return {...item, amount: item.amount + 1}
          }
          return item
        }),
        total: order.total + product.price
      })
    }else {
      const orderItem = {
        product,
        amount: 1
      }
      setOrder({
        items: [...order.items, orderItem],
        total: order.total + product.price
      })
    }
  }

  const clearOrder = () => {
    setOrder(orderInitialState)
  }

  const handlePlaceOrder = () => {
    handleAddOrder(order)
    clearOrder()
    //hacer push a ruta de pedidos
  }

  return (
    <div className="createOrderContainer h-full flex">
      <div className="menuContainer w-70 p-2">
        <Menu onClickProduct={addItemToOrder} />
      </div>
      <div className="orderContainer w-30 p-2">
        <Order order={order} onPlaceOrder={handlePlaceOrder} />
      </div>
    </div>
  )
}

export default Orders;
