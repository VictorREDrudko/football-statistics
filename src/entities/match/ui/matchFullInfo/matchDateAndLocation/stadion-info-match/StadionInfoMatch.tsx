import { MatchStadiumBasicInfo } from '../../../../model'
import s from './StadionInfoMatch.module.scss'

type Props = {
  matchStadiumInfo: MatchStadiumBasicInfo
}

export const StadionInfoMatch = ({ matchStadiumInfo }: Props) => {
  const { city, country, attendance, name } = matchStadiumInfo

  return (
    <div className={s.container}>
      <span className={s.stadiumTitle}>{name},</span>
      <span>{city},</span>
      <span>{country}</span>
      <span className={s.attendance}>{attendance}</span>
    </div>
  )
}
