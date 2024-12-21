import { MatchFifaWorldCup } from 'data/type-data'
import { GeneralInfoAboutMatch } from './generalMatchInfo/GeneralInfoAboutMatch'
import { InfoAboutTeamInMatch } from './infoAboutTeamInMatch/InfoAboutTeamInMatch'
import s from './MatchInfo.module.css'
import { ScoreInMatch, ScoreType } from './scoreInMatch/ScoreInMatch'

type Match = {
  match: MatchFifaWorldCup
}

export const MatchInfo = (props: Match) => {
  return (
    <div className={s.container} key={props.match.id}>
      <GeneralInfoAboutMatch date={props.match.date} stadium={props.match.stadium}/>
      <InfoAboutTeamInMatch team={props.match.teams[0]} forwards={props.match.goals[0]} year={props.match.id} />
      <ScoreInMatch score={props.match.score}/>
      <InfoAboutTeamInMatch team={props.match.teams[1]} forwards={props.match.goals[1]} year={props.match.id} />
    </div>
  )
}