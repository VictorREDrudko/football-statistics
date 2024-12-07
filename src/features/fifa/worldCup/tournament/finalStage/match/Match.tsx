import { useState } from 'react'
import { MatchFifaWorldCup } from '../../../../../../app/App'
import { MatchInfo } from '../../../../../../common/components/matchInfo/MatchInfo'
import s from './Match.module.css'
import { Score } from './score/Score'
import { Team } from './team/Team'

export type MatchProps = {
  match: MatchFifaWorldCup
}

export const Match = (props: MatchProps) => {
  const [mode, setMode] = useState(true)
  const onClickHundler = () => {
    setMode(!mode)
  }

  const infoMatch = mode ? 
    <div className={s.container} onClick={onClickHundler}>
      <Team team={props.match.teams[0]} year={props.match.id}/>
      <Score score={props.match.score}/>
      <Team team={props.match.teams[1]} year={props.match.id}/>
    </div> : 
    <div onClick={onClickHundler}>
      <MatchInfo match={props.match}/>
    </div>

  return infoMatch
}