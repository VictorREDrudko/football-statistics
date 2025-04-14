import s from './DateAffiliation.module.css'

type Props = {
  icon: string
  date: number | "-"
}

export const DateAffiliation = ({icon, date}: Props) => {
  return (
    <div className={s.container}>
      <img src={icon} alt="icon calendar" className={s.icon}/>
      <span className={s.year}>{date}</span>
    </div>
  )
}