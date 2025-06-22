import s from './MatchesChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'
import matchesIcon from './../../../../../../shared/assets/iconStats/matches.png'

type Props = {
  matches: number
}

export const MatchesChampionship = ({matches} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter iconPath={matchesIcon} title={'Matches played:'}/>
      <span className={s.value}>{matches}</span>
    </div>
  )
}
