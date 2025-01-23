import s from './TitleItem.module.css'

type TitleitemProps = {
  title: string
}

export const TitleItem = ({title}: TitleitemProps) => {
  return (
    <h4 className={s.title}>{title}</h4>
  )
}