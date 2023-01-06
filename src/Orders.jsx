import { useState } from 'react'
import NewOrder from "./NewOrder";
import NewMenu from "./NewMenu";

const orderInitialState = {
  items: [],
  total: 0
}

const Orders = () => {
  const [order, setOrder] = useState(orderInitialState)

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

  return (
    <div className="createOrderContainer h-100 d-flex">
      <div className="menuContainer w-70 p-2">
        <NewMenu onClickProduct={addItemToOrder} />
      </div>
      <div className="orderContainer w-30 p-2">
        <NewOrder order={order} onPlaceOrder={clearOrder} />
      </div>
    </div>
  )
}

export default Orders;
