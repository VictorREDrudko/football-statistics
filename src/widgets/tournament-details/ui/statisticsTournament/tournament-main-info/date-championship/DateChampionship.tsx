import s from './DateChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'
import dateIcon from './../../../../../../shared/assets/iconStats/date.png'

type Props = {
  date: string
}

export const DateChampionship = ({date} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter iconPath={dateIcon} title={'Dates:'}/>
      <span className={s.value}>{date}</span>
    </div>
  )
}
