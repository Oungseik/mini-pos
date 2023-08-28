import { ReactNode } from "react"
import { useContext } from "react"
import { OrdersContext } from "../Contexts/OrdersContext"
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode,
  SidebarContent: ReactNode,
}
export default function Drawer({ children, SidebarContent }: Props) {
  const { orders } = useContext(OrdersContext);

  return (
    <div className="justify-between relative z-10">
      <input id="drawer" type="checkbox" className="peer menu-peer hidden" />
      <div className="drawer-content flex items-center gap-4">
        <div className="grow-1 w-full">{children}</div>
        <label htmlFor="drawer" aria-label="menu" role="button" className="block w-fit ml-auto flex-0 relative">
          <span className={twMerge("absolute -top-4 -right-4 w-6 h-6 text-center text-white rounded-full block bg-red-600 shadow", !orders.length && "hidden")}>{orders.length}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="block ml-auto shadow text-primary active:shadow-none" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z" /></svg>
        </label>
      </div>
      <div className="menu fixed w-screen h-screen top-0 right-0 invisible peer-checked:visible grow-0 ">
        <label htmlFor="drawer" className="absolute block w-full h-full bg-slate-800/60 "></label>
        <div className="relative slider translate-x-[150%] ml-auto transition-all duration-300 flex flex-col bg-white justify-between z-10 w-1/3 h-full">
          {SidebarContent}
        </div>
      </div>
    </div>
  )
}
