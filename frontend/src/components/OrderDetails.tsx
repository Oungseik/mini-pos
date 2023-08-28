import Container from "./Container"
import { useContext } from "react";
import { OrdersContext } from "../Contexts/OrdersContext";
import { toast } from "react-toastify";

export default function OrderDetails() {
  const { orders, total, incCount, decCount, removeOrder, resetOrders } = useContext(OrdersContext);

  function doPayment() {
    resetOrders();
    toast("Thanks for purchasing the order!")

  }

  return (
    <Container className="px-0 pb-0">
      <div className="flex flex-col justify-between w-full h-full">
        <div className="py-4 px-2 pl-4">
          <h2 className="text-3xl font-bold text-slate-800">OrderDetails</h2>
          <ul className="flex flex-col gap-4 mt-8 w-full overflow-y-auto max-h-[400px]">
            {orders.map(order => (
              <li key={order.id} className="flex gap-6 relative">
                <button className="absolute top-2 right-2 block" onClick={() => removeOrder(order.id as number)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="bg-blue-100 shrink-0 w-24 h-24 flex-0 flex items-center justify-center rounded-lg">
                  <img src={order.thumbnail} className="w-full h-full object-cover" alt={order.title} />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="font-medium text-lg">{order.title}</h3>
                  <p className="line-clamp-1">{order.description}</p>
                  <div className="flex gap-4 items-baseline">
                    <div className="border-2 text-center border-slate-500/70 rounded-lg flex w-fit divide-x-2 divide-slate-500/70">
                      <button className="font-bold w-12 py-1.5" onClick={() => { order.count > 1 && decCount(order.id as number) }}>-</button>
                      <div className="w-12 py-1.5">{order.count}</div>
                      <button className="font-bold w-12 py-1.5" onClick={() => { incCount(order.id as number) }}>+</button>
                    </div>
                    <p className="text-primary font-medium"><small>Ks</small>&nbsp;<span className="font-2xl">{order.price?.toLocaleString()}</span></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-purple-100 grid gap-4 grid-cols-2 px-2 pl-4 py-4">
          <p>Subtotal</p>
          <p className="text-right text-primary">Ks {total.toFixed(2)}</p>
          <p>Tax(5%)</p>
          <p className="text-right text-primary">Ks {(total * 0.05).toFixed(2)}</p>
          <div className="col-start-1 col-end-3 border-b-2 border-slate-400 border-dotted" />
          <p>Total</p>
          <p className="text-right font-bold text-primary">Ks {(total + total * 0.05).toFixed(2)}</p>
          <button className="col-start-1 col-end-3 font-medium text-white bg-primary rounded-lg py-2 shadow active:shadow-none disabled:bg-slate-400 disabled:cursor-not-allowed" disabled={!orders.length} onClick={doPayment}>Pay Now</button>
        </div>
      </div>
    </Container>
  )
}
