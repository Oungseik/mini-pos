import { useEffect, useState } from "react";
import Navbar from "../components/NavBar"
import Container from "../components/Container"
import CategoriesList from "../components/CategoriesList"
import { CategoryContext } from "../Contexts/CategoryContext";
import { categories } from "../lib";
import ProductsList from "../components/ProductsList";
import { useOrders } from "../config/hooks/useOrders";
import { OrdersContext } from "../Contexts/OrdersContext";
import { DOMAIN } from "../config";
import { usePagination } from "../config/hooks/usePagination";
import PaginationControl from "../components/PaginationControl";
import { twMerge } from "tailwind-merge";

const PER_PAGE = 20;

export default function HomeView() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const { currentPage, totalPage, next, prev, setPagination } = usePagination({ total: 0, perPage: PER_PAGE });
  const { orders, addOrder, removeOrder, incCount, decCount, resetOrders } = useOrders();
  const totalPrice = orders.reduce((a, b) => a + (b.price || 0) * (b.count || 0), 0);

  useEffect(() => {
    (async () => {
      const token = window.sessionStorage.getItem("token");
      if (category !== "all" || search) {
        const url = `${DOMAIN}/api/products?search=${search}&category=${category === 'all' ? '' : category}`
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bear ${token}`
          }
        });
        const { products } = await response.json();
        setProducts(products);
      } else {
        const url = `${DOMAIN}/api/products?take=${PER_PAGE}&skip=${currentPage * PER_PAGE}`
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bear ${token}`
          }
        });
        const { products, total } = await response.json();
        setProducts(products);
        setPagination({ currentPage, total, totalPage: Math.ceil(total / PER_PAGE), perPage: PER_PAGE });
      }
    })()
  }, [search, category, currentPage])

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      <OrdersContext.Provider value={{ orders, total: totalPrice, addOrder, removeOrder, incCount, decCount, resetOrders }}>
        <Container>
          <Navbar onSearch={setSearch} />
          <CategoriesList categories={categories} />
          <ProductsList products={products} />
          <div className={twMerge(search || category !== 'all' ? "invisible" : "")}>
            <PaginationControl next={next} prev={prev} currentPage={currentPage} totalPage={totalPage} />
          </div>
        </Container>
      </OrdersContext.Provider >
    </CategoryContext.Provider>
  )
}
