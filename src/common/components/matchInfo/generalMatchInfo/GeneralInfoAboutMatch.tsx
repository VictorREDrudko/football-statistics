import { Country } from '../../country/Country'
import s from './GeneralInfoAboutMatch.module.css'

export type StadiumType = {
  title: string
  city: string
  country: string
  attendance: string
}

type GeneralInfoAboutMatchProps = {
  date: string
  stadium: StadiumType
}

export const GeneralInfoAboutMatch = (props: GeneralInfoAboutMatchProps) => {
  return (
    <div className={s.container}>
      <span className={s.date}>{props.date}</span>
      <span className={s.nameStadium}>{`"${props.stadium.title}"`}</span>
      <div>
        <span>{`${props.stadium.city}, `}</span>
        <span>{props.stadium.country}</span>
      </div>
    </div>
  )
}