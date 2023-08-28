import { Link } from "react-router-dom"
import OrderDetails from "./OrderDetails"
import Drawer from "./Drawer"
import { useState } from "react"

export default function Navbar({ onSearch }: { onSearch: (search: string) => void }) {
  const [search, setSearch] = useState("");

  return (
    <Drawer SidebarContent={<OrderDetails />}>
      <nav className="flex justify-between">
        <Link to="/"><img src="/images/KLink-blue.svg" alt="KLink logo" /></Link>
        <form className="relative w-1/2" onSubmit={(e) => { e.preventDefault(); onSearch(search); }}>
          <input id="search" name="search" type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" className="input shadow" />
          <button aria-label="search" className="bg-primary absolute block h-9 w-20 flex items-center justify-center rounded-full top-[5px] right-4 shadow shadow-primary active:shadow-none"><img src="/images/magnify-glass.svg" alt="magnify-glass" /></button>
        </form>
      </nav>
    </Drawer>
  )

}
