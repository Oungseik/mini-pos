import { createContext } from "react";
import { Order } from "../types";

type OrdersContext = {
  orders: Order[],
  total: number,
  addOrder: (newOrder: Order) => void,
  removeOrder: (id: number) => void,
  incCount: (id: number) => void,
  decCount: (id: number) => void,
  resetOrders: () => void,
}

const OrdersContext = createContext<OrdersContext>({
  orders: [],
  total: 0,
  addOrder: () => { },
  removeOrder: () => { },
  incCount: () => { },
  decCount: () => { },
  resetOrders: () => { },
})

export { OrdersContext };

