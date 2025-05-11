import s from './NumberInCircle.module.css'

type Props = {
  number: number
  description: string
}

export const NumberInCircle = ({number, description}: Props) => {
  return (
    <div className={s.container}>
      <span className={s.number}>
        {number}
      </span>
      <span className={s.description}>{description}</span>
    </div>
  )
}