import s from './TitleSectionCard.module.css'

type Props = {
  title: string
}

export const TitleSectionCard = ({title}: Props) => {
  return (
    <h4 className={s.title}>{title}</h4>
  )
}