import { MatchFifaWorldCup } from "data/type-data"
import { Match } from "../../match/Match"
import s from './MatchesInGroup.module.css'

type MatchesInGroupProps = {
  matches: MatchFifaWorldCup[]
}

export const MatchesInGroup = (props: MatchesInGroupProps) => {
  const mappedMatch = props.matches.map(match => {
    return (
    <div key={match.id} className={s.containerMatchInGroup}>
      <Match match={match} />
    </div>
    )
  })
  
  return (
     <div className={s.matchesInGroup}>{mappedMatch}</div>
  )
}