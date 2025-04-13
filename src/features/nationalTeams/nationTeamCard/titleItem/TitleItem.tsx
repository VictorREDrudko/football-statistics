import s from './TitleItem.module.css'

type Props = {
  title: string
}

export const TitleItem = ({title}: Props) => {
  return (
    <h4 className={s.title}>{title}</h4>
  )
}