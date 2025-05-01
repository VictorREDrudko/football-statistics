import { CountryTeam } from '../../../../../../common/components/countryTeam/CountryTeam'
import { WorldCupMatch } from '../../../../../../data/worldCupData/type-worldCupData'
import { getYearTournament } from '../../../../../../utils/getYearTournament'
import s from './MatchFlowchart.module.css'
import { ScoreMatchFlowchart } from './scoreMatchFlowchart/ScoreMatchFlowchart'


type Props = {
  match: WorldCupMatch
}

export const MatchFlowchart = ({match}: Props) => {
  const year = getYearTournament(match.date);

  return (
    <div className={s.container}>
      <div className={s.containerTeams}>
        <CountryTeam countryName={match.teams[0]} year={year} reverse={false}/>
        <CountryTeam countryName={match.teams[1]} year={year} reverse={false}/>
      </div>
      <div className={s.containerScore}>
        <ScoreMatchFlowchart score={match.score}/>
      </div>
      
    </div>
  )
}