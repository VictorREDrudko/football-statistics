import { MatchFifaWorldCup } from 'data/type-data'
import s from './FinalStage.module.css'
import { Groups } from './groups/Groups'
import { KnockoutStage } from './knockout-stage/KnockoutStage'
import { MatchPlayOff } from './match-play-off/MatchPlayOff'
import { Match } from './match/Match'
import { Team } from './match/team/Team'

export type FinalStageProps = {
  data: MatchFifaWorldCup[]
  date: string
}

export const FinalStage = (props: FinalStageProps) => {
  // Filter matches group / play-off stage
  const matchesGroupStage: MatchFifaWorldCup[] = props.data.filter(el => el.stage.slice(0, 5) === 'group');
  const matchesPlayOff: MatchFifaWorldCup[] = props.data.filter(el => el.stage.slice(0, 5) !== 'group');
  // Unique name teams in play-off
  const uniqueKnockoutStageTeams = Array.from(new Set(matchesPlayOff.map(match => match.teams).flat()));

  return (
    <div className={s.container}>
      <h2 className={s.titleGroupStage}>Group stage</h2>
      <Groups matches={matchesGroupStage} teamsPlayOff={uniqueKnockoutStageTeams} year={props.date}/>
      <h2 className={s.titleGroupStage}>Knockout stage</h2>
      <KnockoutStage matches={matchesPlayOff}/>
    </div>
  )
}