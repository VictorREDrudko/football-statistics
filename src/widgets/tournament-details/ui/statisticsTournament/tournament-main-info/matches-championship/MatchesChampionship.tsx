import s from './MatchesChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'

type Props = {
  matches: number
}

export const MatchesChampionship = ({matches} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter title={'Matches played:'}/>
      <span className={s.value}>{matches}</span>
    </div>
  )
}
