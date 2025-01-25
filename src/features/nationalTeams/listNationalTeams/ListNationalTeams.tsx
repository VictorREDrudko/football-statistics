import { NationalTeam } from 'data/type-data'
import s from './ListNationalTeams.module.css'

type Props = {
  data: NationalTeam
}

export const ListNationalTeams = ({data}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.containerIcon}>
        <img className={s.flag} src={data.flag[0]} alt={`${data.name} flag picture` } />
        <img className={s.icon} src={data.associationIcon} alt={`${data.name} football association icon`} />
      </div>
      <h3 className={s.title}>{data.name}</h3>
    </div>
  )
}