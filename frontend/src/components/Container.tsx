import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: ReactNode,
  className?: string
}

export default function Container({ children, className }: Props) {

  return (
    <div className={twMerge("p-8 mx-auto w-full h-full", className)}>
      {children}
    </div>
  )
} 
