
import { MatchInfo } from '@/features/matchDisplay'
import { CountryTeam } from '@/shared/ui/country-team'
import s from './MatchFlowchart.module.scss'
import { ScoreMatchFlowchart } from './scoreMatchFlowchart/ScoreMatchFlowchart'



type Props = {
  match: MatchInfo
}

export const MatchFlowchart = ({match}: Props) => {
  // const year = getYearTournament(match.date);

  return (
    <div className={s.container}>
      <div className={s.containerTeams}>
        {/* <CountryTeam countryName={match.teams[0]} year={year} reverse={false}/>
        <CountryTeam countryName={match.teams[1]} year={year} reverse={false}/> */}
      </div>
      <div className={s.containerScore}>
        <ScoreMatchFlowchart score={match.score}/>
      </div>
      
    </div>
  )
}