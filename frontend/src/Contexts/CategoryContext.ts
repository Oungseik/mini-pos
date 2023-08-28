import { createContext } from "react";

type CategoryContext = {
  category: string | "all",
  setCategory: React.Dispatch<React.SetStateAction<string | "all">>,
}

const CategoryContext = createContext({
  category: "all",
  // @ts-ignore
  setCategory: (category: string) => { }
})

export { CategoryContext }

