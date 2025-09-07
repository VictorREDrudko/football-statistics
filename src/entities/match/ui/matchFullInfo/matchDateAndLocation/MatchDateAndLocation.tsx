import { MatchStadiumBasicInfo } from '../../../model'
import { StadionInfoMatch } from './stadion-info-match/StadionInfoMatch'
import s from './MatchDateAndLocation.module.scss'

type Props = {
  date: string
  matchStadiumInfo: MatchStadiumBasicInfo
}

export const MatchDateAndLocation = ({ date, matchStadiumInfo }: Props) => {
  return (
    <div className={s.container}>
      <span className={s.date}>{date}</span>
      <StadionInfoMatch matchStadiumInfo={matchStadiumInfo} />
    </div>
  )
}
