import { MatchInfo } from '@/shared/model/tournament-config/class-match/types'
import { MatchPartialInfo } from '../matchPartialInfo/MatchPartialInfo'
import { InfoGoals } from './infoGoals/InfoGoals'
import s from './MatchAllInfo.module.scss'
import { MatchDateAndLocation } from './matchDateAndLocation/MatchDateAndLocation'

type Props = {
  match: MatchInfo
}

export const MatchAllInfo = ({match}: Props) => {
  return (
    <div className={s.container}>
      <MatchDateAndLocation date={match.date} stadiumInfo={match.stadium}/>
      <div className={s.containerMatch}>
        <div className={s.containerMatch1}>
          <MatchPartialInfo match={match} />
        </div>
        <InfoGoals infoGoals={match.goals}/>
      </div>
    </div>
  )
}