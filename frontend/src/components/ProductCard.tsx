import { Product } from "../types";
import { useContext } from "react";
import { OrdersContext } from "../Contexts/OrdersContext";
import { twMerge } from "tailwind-merge";

type Props = Partial<Product>;

export default function ProductCard({ id, title, description, price, thumbnail }: Props) {
  const { addOrder, removeOrder, orders } = useContext(OrdersContext);

  function addProductToOrdersList() {
    if (orders.some(order => order.id === id)) {
      return removeOrder(id as number)
    }
    addOrder({ id, title, description, price, count: 1, thumbnail })
  }

  return (
    <button onClick={addProductToOrdersList} className={twMerge("relative flex flex-col justify-between h-full border rounded-lg pb-4 overflow-hidden shadow", orders.some(order => order.id === id) && "border-primary border-2")}>
      <span className={twMerge("text-primary rounded-full bg-white absolute top-1 right-1 hidden shadow-md", orders.some(order => order.id === id) && "block")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72z" /></svg>
      </span>
      <div>
        <div className="bg-blue-100 rounded-lg aspect-video flex items-center justify-center">
          {/* <img src="/images/item.svg" alt={title} /> */}
          <img src={thumbnail} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="px-4 pt-4">
          <p className="text-medium text-lg capitalize break-all">{title}</p>
          <p className="line-clamp-2 text-slate-700 break-all">{description}</p>
        </div>
      </div>
      <p className="font-bold text-primary px-4 pt-1"><small>Ks</small> <span className="text-lg">{price}</span></p>
    </button>
  )
}
