import { Goals } from 'data/type-data'
import s from './InfoAboutGoals.module.css'

type InfoAboutGoalsProps = {
  forwards: Goals
}


export const InfoAboutGoals = (props: InfoAboutGoalsProps) => {
  const mappedForwards = props.forwards.playersScoredGoal.map((player, index) => {
    return <li key={index}>{player}</li>
  })

  const mappedTimeGoals = props.forwards.timeGoals.map((timeGoal, index) => {
    return timeGoal.indexOf(',') === -1 ? 
            <li key={index}>{timeGoal + "'"}</li> :
            <li key={index}>{timeGoal.split(',').map(el => el + "'").join()}</li>
  })

  return (
    <div className={s.container}>
      <ul>
        {mappedForwards}
      </ul>
      <ul>
        {mappedTimeGoals}
      </ul>
    </div>
  )
}