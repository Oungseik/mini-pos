import { Product } from "../types"
import ProductCard from "./ProductCard"

type Props = {
  products: Product[]
}

export default function ProductsList({ products }: Props) {
  return (
    <ul className="grid grid-cols-5 gap-5">
      {products.map((prod, i) => <li key={`${prod.title}-${i}`} ><ProductCard {...prod} /></li>)}
    </ul>
  )
}
