import s from './MatchesByStage.module.css'
import { Match } from '../match/Match'
import { WorldCupMatch } from '../../../data/worldCupData/type-worldCupData'

type Props = {
  matches: WorldCupMatch[] 
}

export const MatchesByStage = ({matches}: Props) => {
  const groupMatches = matches.map(match => {
    return (
    <div key={match.id} className={s.containerMatch}>
      <Match match={match} />
    </div>
    )
  })

  return (
    <div className={s.container}>
      {groupMatches}
    </div>
  )
}