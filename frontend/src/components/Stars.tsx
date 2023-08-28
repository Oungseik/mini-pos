type Props = {
  count: number
}
export default function Starts({ count }: Props) {

  return (
    <div className="flex">
      {new Array(count).fill(0).map((_, i) => <img src="/images/star.svg" alt="star" key={i} />)}
    </div>
  )
}

