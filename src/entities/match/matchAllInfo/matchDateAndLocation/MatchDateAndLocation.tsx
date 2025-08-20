import { StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import s from './MatchDateAndLocation.module.scss'
import { choiseStadionNameByYear } from '../../lib/choiseStadionNameByYear'
import { getYearFromMatchDate } from '../../lib/getYearFromMatchDate'

type Props = {
  date: string
  stadiumInfo: StadiumInfo
}

export const MatchDateAndLocation = ({ date, stadiumInfo }: Props) => {
  const year = getYearFromMatchDate(date)
  const stadionName = choiseStadionNameByYear(stadiumInfo.names, year)
  const location = stadiumInfo.location

  return (
    <div className={s.container}>
      <span className={s.date}>{date}</span>
      <div className={s.containerStadium}>
        <span className={s.stadiumTitle}>{stadionName},</span>
        <span>{location.city},</span>
        <span>{location.country}</span>
        <span className={s.attendance}>{stadiumInfo.attendance}</span>
      </div>
    </div>
  )
}
