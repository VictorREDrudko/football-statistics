import { StadiumInfo } from 'data/worldCupData/type-worldCupData'
import s from './MatchDateAndLocation.module.css'

type Props = {
  date: string
  stadiumInfo: StadiumInfo
}

export const MatchDateAndLocation = ({date, stadiumInfo}: Props) => {
  // матч не состоялся
  const noMatch = stadiumInfo.title === '' ? false : true

  return (
    <div className={s.container}>
      <span className={s.date}>
        {date}
      </span>
      <div className={s.containerStadium}>
        <span>
          {noMatch && `"${stadiumInfo.title}"`}
        </span>
        <span>
          {noMatch && `${stadiumInfo.city}, `}
        </span>
        <span>
          {stadiumInfo.country}
        </span>
        <span>
          {noMatch && `(${stadiumInfo.attendance})`}
        </span>
      </div>
    </div>
  )
}