import { Container, Flag } from '@/shared'
import s from './DateChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'

type Props = {
  date: string
}

export const DateChampionship = ({date} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter title={'Dates:'}/>
      <span className={s.value}>{date}</span>
    </div>
  )
}
