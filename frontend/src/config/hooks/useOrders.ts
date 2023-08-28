import { useState } from "react";
import { Order } from "../../types";

function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  function addOrder(newOrder: Order) {
    orders.some(order => order.id === newOrder.id) ? setOrders(orders) : setOrders([...orders, newOrder]);
  }

  function removeOrder(id: number) {
    setOrders(orders.filter(order => order.id !== id));
  }

  function incCount(id: number) {
    setOrders(orders.map(order => order.id === id ? { ...order, count: order.count + 1 } : order))
  }

  function decCount(id: number) {
    setOrders(orders.map(order => order.id === id && order.count > 0 ? { ...order, count: order.count - 1 } : order))
  }

  function resetOrders() {
    setOrders([]);
  }

  return { orders, addOrder, removeOrder, incCount, decCount, resetOrders };
}

export { useOrders };


