import s from './GoalsChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'

type Props = {
  goals: number
  goalsPerMatch: number
}

export const GoalsChampionship = ({goals, goalsPerMatch} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter title={'Goals scored:'}/>
      <span className={s.value}>{goals}</span>
      <span className={s.prompt}>{`(${goalsPerMatch} per match)`}</span>
    </div>
  )
}
