import { useState } from 'react'
import { MatchInfo } from '../../../../../../common/components/matchInfo/MatchInfo'
import s from './MatchPlayOff.module.css'
import { Team } from '../match/team/Team'
import { Score } from '../match/score/Score'
import { MatchFifaWorldCup } from 'data/type-data'

export type MatchProps = {
  match: MatchFifaWorldCup
}

export const MatchPlayOff = (props: MatchProps) => {
  const [mode, setMode] = useState(true)
  const onClickHundler = () => {
    setMode(!mode)
  }

  const viewScore1 = props.match.score.map((sc, index) => {
    const view = index > 0 && sc[0] !== undefined ? `(${sc[0]})` : sc[0]
    return (
      <span className={s.textScore} key={index}>{view}</span>
    )
  })

  const viewScore2 = props.match.score.map((sc, index) => {
    const view = index > 0 && sc[1] !== undefined ? `(${sc[1]})` : sc[1]
    return (
      <span className={s.textScore} key={index}>{view}</span>
    )
  })

  const infoMatch = mode ? 
    <div className={s.container} onClick={onClickHundler}>
      <div className={s.containerTeamScore}>
        <Team team={props.match.teams[0]} year={props.match.id} />
        <div>{viewScore1}</div>
      </div>
      <div className={s.containermaTeamScore}>
        <Team team={props.match.teams[1]} year={props.match.id} />
        <div>{viewScore2}</div>
      </div>
    </div> : 
    <div onClick={onClickHundler}>
      <MatchInfo match={props.match}/>
    </div>

  return infoMatch
}