import { useState } from 'react'
import { MatchInfo } from '../../../../../../common/components/matchInfo/MatchInfo'
import s from './Match.module.css'
import { Score } from './score/Score'
import { MatchFifaWorldCup } from 'data/type-data'
import { Team } from 'features/worldCup/team/Team'

export type MatchProps = {
  match: MatchFifaWorldCup
}

export const Match = ({match}: MatchProps) => {
  const [mode, setMode] = useState(true)

  const onClickHundler = () => {
    setMode(!mode)
  }

  const year = match.id.split('-')[1]

  const infoMatch = mode ? 
    <div className={s.container} onClick={onClickHundler}>
      <Team name={match.teams[0]} year={year} spanStyle={{fontSize: '1.0rem', width: '150px'}}/>
      <Score score={match.score}/>
      <Team name={match.teams[1]} year={year} spanStyle={{fontSize: '1.0rem', width: '150px'}}/>
    </div> : 
    <div onClick={onClickHundler}>
      <MatchInfo match={match}/>
    </div>

  return <> {infoMatch} </>
}