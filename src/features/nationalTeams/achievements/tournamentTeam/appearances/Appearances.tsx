import s from './Appearances.module.css'

type Props = {
  title: string
  value: number
  allValue: number
}

export const Appearances = ({title, value, allValue}: Props) => {
  return (
    <div className={s.container}>
      <span className={s.title}>{title}</span>
      <span className={s.value}>{value}</span>
      <div className={s.block}>
      <span>/ </span>
      <span className={s.allValue}>{allValue}</span>
      </div>
    </div>
  )
}