import { useState } from "react";
import Order from "./Order";
import Menu from "./Menu";
import Layout from "./Layout";

const orderInitialState = {
  items: [],
  total: 0,
};

const Orders = ({ handleAddOrder }) => {
  const [order, setOrder] = useState(orderInitialState);

  const addItemToOrder = (product) => {
    const productInOrder = order.items.find(
      (item) => item.product.id === product.id
    );
    if (productInOrder) {
      setOrder({
        items: order.items.map((item) => {
          if (item.product.id === productInOrder.product.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
        total: order.total + product.price,
      });
    } else {
      const orderItem = {
        product,
        amount: 1,
      };
      setOrder({
        items: [...order.items, orderItem],
        total: order.total + product.price,
      });
    }
  };

  const clearOrder = () => {
    setOrder(orderInitialState);
  };

  const handlePlaceOrder = () => {
    handleAddOrder(order);
    clearOrder();
    //hacer push a ruta de pedidos
  };

  return (
    <Layout
      rightEl={
        <>
          <h2 className="text-3xl font-bold dark:text-white">Menu</h2>
          <Menu onClickProduct={addItemToOrder} />
        </>
      }
      leftEl={<Order order={order} onPlaceOrder={handlePlaceOrder} />}
    />
  );
};

export default Orders;
