import s from './TitleCup.module.css'

type Props = {
  title: string
}

export const TitleCup = ({title}: Props) => {
  return <h5 className={s.title}> {title} </h5>
}