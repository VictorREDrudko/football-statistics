import s from './Match.module.css'
import { Score } from './score/Score'
import { Team } from './team/Team'

export type MatchProps = {
  id: string
  teams: string[]
  score: Array<number[]>
}

export const Match = (props: MatchProps) => {
  return (
    <div className={s.container}>
      <Team team={props.teams[0]} year={props.id}/>
      <Score score={props.score}/>
      <Team team={props.teams[1]} year={props.id}/>
    </div>
  )
}