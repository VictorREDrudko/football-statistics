import { MatchFifaWorldCup } from 'data/type-data'
import { GeneralInfoAboutMatch } from './generalMatchInfo/GeneralInfoAboutMatch'
import { InfoAboutTeamInMatch } from './infoAboutTeamInMatch/InfoAboutTeamInMatch'
import s from './MatchInfo.module.css'
import { ScoreInMatch } from './scoreInMatch/ScoreInMatch'

type Match = {
  match: MatchFifaWorldCup
}

export const MatchInfo = ({match}: Match) => {
  const year = match.id.split('-')[1]

  return (
    <div className={s.container}>
      <GeneralInfoAboutMatch date={match.date} stadium={match.stadium}/>
      <div className={s.containerMatch}>
        <InfoAboutTeamInMatch nameTeam={match.teams[0]} forwards={match.goals[0]} year={year} />
        <ScoreInMatch score={match.score}/>
        <InfoAboutTeamInMatch nameTeam={match.teams[1]} forwards={match.goals[1]} year={year} />
      </div>
    </div>
  )
}