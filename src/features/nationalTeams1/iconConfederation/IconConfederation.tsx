import { Confederation } from '../../../data/nationalTeamsData/type-nationalTeams'
import s from './IconConfederation.module.css'

type Props = {
  icon: string
  confeder: Confederation
}

export const IconConfederation = ({icon, confeder}: Props) => {
  return (
    <div className={s.container}>
      <img src={icon} alt={`icon ${confeder}`} className={s.icon}/>
    </div>
  )
}