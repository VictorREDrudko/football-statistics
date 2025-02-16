import { NationalTeam } from 'data/type-data'
import s from './ListNationalTeams.module.css'

type Props = {
  data: NationalTeam
  setTeam: (team: string) => void
  navigateToTeam: (team: string) => void;
}

export const ListNationalTeams = ({data, setTeam, navigateToTeam}: Props) => {
  const showInfoTeam = () => {
    setTeam(data.name[0]);
    navigateToTeam(data.name[0]);
  }

  return (
    <li className={s.container} onClick={showInfoTeam}>
      <div className={s.containerIcon}>
        <img className={s.flag} src={data.flag[0]} alt={`${data.name} flag picture` } />
        <img className={s.icon} src={data.associationIcon} alt={`${data.name} football association icon`} />
      </div>
      <h3 className={s.title}>{data.name}</h3>
    </li>
  )
}