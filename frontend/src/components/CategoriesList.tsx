import { useContext } from 'react';
import { twMerge } from 'tailwind-merge'
import { CategoryContext } from '../Contexts/CategoryContext';

type Props = {
  categories: string[],
}

export default function CategoriesList({ categories }: Props) {
  const { category, setCategory } = useContext(CategoryContext);

  const selectCategory = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "BUTTON") {
      setCategory(target.innerText.toLowerCase());
    }
  }

  return (
    <ul onClick={selectCategory} className="flex gap-2 my-8 flex-wrap">
      <li><button className={twMerge("rounded-full capitalize px-3 py-1 border bg-slate-100", category === 'all' && "bg-primary text-white")}>all</button></li>
      {categories.map(cate => <li key={cate}><button className={twMerge("rounded-full capitalize px-3 py-1 border bg-slate-100", category === cate && "bg-primary text-white")}>{cate}</button></li>)}
    </ul >
  )
}
