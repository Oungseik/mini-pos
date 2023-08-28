type Props = {
  currentPage: number,
  totalPage: number,
  next: () => void,
  prev: () => void,
}
export default function PaginationControl({ currentPage, totalPage, next, prev }: Props) {
  const pages = new Array(totalPage + 1).fill(0).map((_, i) => i + 1);
  console.log(pages);
  return (
    <>
      <div className="flex mx-auto my-8 items-center justify-center text-center active:shadow-none">
        <button onClick={prev} className="shadow rounded-md p-1 active:shadow-none text-primary outline-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8l8-8z" /></svg>
        </button>
        <div className="px-4 text-xl text-slate-700">page <span className="font-bold text-primary">{currentPage + 1}</span> of <span className="font-bold text-primary">{totalPage}</span></div >
        <button onClick={next} className="shadow rounded-md p-1 active:shadow-none text-primary outline-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z" /></svg>
        </button>
      </div >
    </>
  )
}
