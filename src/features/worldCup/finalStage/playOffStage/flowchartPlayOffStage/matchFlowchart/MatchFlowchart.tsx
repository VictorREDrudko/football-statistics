import { WorldCupMatch } from 'data/worldCupData/type-worldCupData'
import s from './MatchFlowchart.module.css'
import { CountryTeam } from 'common/components/countryTeam/CountryTeam'
import { ScoreMatchFlowchart } from './scoreMatchFlowchart/ScoreMatchFlowchart'
import { background } from 'data/data'

type Props = {
  match: WorldCupMatch
}

export const MatchFlowchart = ({match}: Props) => {
  const year = match.id.split('-')[1]

  return (
    <div className={s.container}>
      <div className={s.containerTeams}>
        <CountryTeam countryName={match.teams[0]} year={year} style={{fontSize: '0.8rem', width: '7.5rem'}} styleFlag={{width: '2.3rem'}}/>
        <CountryTeam countryName={match.teams[1]} year={year} style={{fontSize: '0.8rem', width: '7.5rem'}} styleFlag={{width: '2.3rem'}}/>
      </div>
      <div className={s.containerScore}>
        <ScoreMatchFlowchart score={match.score}/>
      </div>
      
    </div>
  )
}