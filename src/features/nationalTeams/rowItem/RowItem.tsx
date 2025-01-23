import s from './RowItem.module.css'

type RowItemProps = {
  title: string
  value: number
}

export const RowItem = ({title, value}: RowItemProps) => {
  return (
    <div className={s.container}>
      <span className={s.title}>{title}</span>
      <span className={s.value}>{value}</span>
    </div>
  )
}