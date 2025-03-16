import { MatchFifaWorldCup } from 'data/type-data'
import s from './MatchOfKnockoutStage.module.css'
import { Team } from 'features/worldCup/team/Team'
import { InfoTeam } from './infoTeam/InfoTeam'

type Props = {
  match: MatchFifaWorldCup
}

export const MatchOfKnockoutStage = ({match}: Props) => {
  const year = match.id.split('-')[1]

  return (
    <div className={s.container}>
      <InfoTeam name={match.teams[0]} year={year} score={match.score} index={0}/>
      <InfoTeam name={match.teams[1]} year={year} score={match.score} index={1}/>
    </div>
  )
}