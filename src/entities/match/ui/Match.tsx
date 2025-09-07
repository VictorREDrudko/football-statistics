import { FormattedMatchData, MatchMode } from '../model'
import { MatchFullInfo } from './matchFullInfo/MatchFullInfo'
import { MatchPartialInfo } from './matchPartialInfo/MatchPartialInfo'
import s from './Match.module.scss'

type Props = {
  mode: MatchMode
  matchData: FormattedMatchData
}

export const Match = ({ mode, matchData }: Props) => {
  const { matchBasicInfo } = matchData
  return (
    <>
      {mode === 'partial' && (
        <div className={s.container}>
          <MatchPartialInfo matchBasicInfo={matchBasicInfo} />
        </div>
      )}
      {mode === 'full' && (
        <div className={s.containerFullInfo}>
          <MatchFullInfo matchData={matchData} />
        </div>
      )}
    </>
  )
}
