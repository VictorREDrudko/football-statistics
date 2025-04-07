import { StadiumInfo } from 'data/worldCupData/type-worldCupData'
import s from './MatchDateAndLocation.module.css'

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
        <span>
          {`"${stadiumInfo.title}"`}
        </span>
        <span>
          {`${stadiumInfo.city}, `}
        </span>
        <span>
          {stadiumInfo.country}
        </span>
        <span>
          {`(${stadiumInfo.attendance})`}
        </span>
      </div>
    </div>
  )
}