import { StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import s from './MatchDateAndLocation.module.scss'

type Props = {
  date: string
  stadiumInfo: StadiumInfo
}

export const MatchDateAndLocation = ({date, stadiumInfo}: Props) => {

  return (
    <div className={s.container}>
      <span className={s.date}>
        {date}
      </span>
      <div className={s.containerStadium}>
        <span className={s.stadiumTitle}>
          {stadiumInfo.title},
        </span>
        <span>
          {stadiumInfo.city},
        </span>
        <span>
          {stadiumInfo.country}
        </span>
        <span className={s.attendance}>
          ({stadiumInfo.attendance})
        </span>
      </div>
    </div>
  )
}