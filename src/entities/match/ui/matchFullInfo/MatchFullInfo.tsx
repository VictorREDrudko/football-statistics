import { FormattedMatchData } from '../../model'
import { MatchPartialInfo } from '../matchPartialInfo/MatchPartialInfo'
import { InfoGoals } from './infoGoals/InfoGoals'
import { MatchDateAndLocation } from './matchDateAndLocation/MatchDateAndLocation'
import s from './MatchFullInfo.module.scss'

type Props = {
  matchData: FormattedMatchData
}

export const MatchFullInfo = ({ matchData }: Props) => {
  const { matchBasicInfo, matchAdditionalInfo, matchStadiumInfo } = matchData
  const { date, goals } = matchAdditionalInfo

  return (
    <div className={s.container}>
      <MatchDateAndLocation date={date} matchStadiumInfo={matchStadiumInfo} />
      <div className={s.containerMatchPartial}>
        <div className={s.containerBasicInfo}>
          <MatchPartialInfo matchBasicInfo={matchBasicInfo} />
        </div>
        <InfoGoals goalsDetails={goals} />
      </div>
    </div>
  )
}
