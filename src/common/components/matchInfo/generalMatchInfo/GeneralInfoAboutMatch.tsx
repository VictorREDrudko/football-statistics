import { Stadium } from 'data/type-data'
import s from './GeneralInfoAboutMatch.module.css'

type GeneralInfoAboutMatchProps = {
  date: string
  stadium: Stadium
}

export const GeneralInfoAboutMatch = ({date, stadium}: GeneralInfoAboutMatchProps) => {
  return (
    <div className={s.container}>
      <span className={s.date}>{date}</span>
      <div className={s.containerStadium}>
        <span className={s.text}>{`"${stadium.title}"`}</span>
        <span className={s.text}>{`${stadium.city}, `}</span>
        <span className={s.text}>{stadium.country}</span>
        <span className={s.text}>{`(${stadium.attendance})`}</span>
      </div>
    </div>
  )
}