import { MatchProps } from '../match/model/types'
import { Match } from '../match/ui/Match'
import s from './MatchesByStage.module.scss'

type Props = {
  matches: MatchProps[] 
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