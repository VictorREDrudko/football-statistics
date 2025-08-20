import s from './ChampionshipDate.module.scss'

type Props = {
  date: string
}

export const ChampionshipDate = ({ date }: Props) => {
  return <span className={s.date}>{date}</span>
}
