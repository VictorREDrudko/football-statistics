import s from './GoalsChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'
import { Container } from '@/shared'
import goalIcon from './../../../../../../shared/assets/iconStats/goal.png'

type Props = {
  goals: number
  goalsPerMatch: number
}

export const GoalsChampionship = ({goals, goalsPerMatch} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter iconPath={goalIcon} title={'Goals scored:'}/>
      <Container gap='2' align='center'>
        <span className={s.value}>{goals}</span>
        <span className={s.prompt}>{`(${goalsPerMatch} per match)`}</span>
      </Container>
    </div>
  )
}
