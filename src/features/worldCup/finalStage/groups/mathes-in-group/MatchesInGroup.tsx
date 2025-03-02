import { MatchFifaWorldCup } from "data/type-data"
import s from './MatchesInGroup.module.css'
import { Match } from "../group/match/Match"

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
     <div>{mappedMatch}</div>
  )
}