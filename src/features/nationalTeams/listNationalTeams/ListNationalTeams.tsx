import { NationalTeam } from 'data/type-data'
import s from './ListNationalTeams.module.css'
import { getCurrentCountryAttribut } from 'data/data'

type Props = {
  data: NationalTeam
  setTeam: (team: string) => void
  navigateToTeam: (team: string) => void;
}

export const ListNationalTeams = ({data, setTeam, navigateToTeam}: Props) => {
  const showInfoTeam = () => {
    setTeam(getCurrentCountryAttribut(data.name));
    navigateToTeam(getCurrentCountryAttribut(data.name));
  }

  const flag = getCurrentCountryAttribut(data.flag)
  const name = getCurrentCountryAttribut(data.name)

  return (
    <li className={s.container} onClick={showInfoTeam}>
      <div className={s.containerIcon}>
        <img className={s.flag} src={flag} alt={`${name} flag picture` } />
        <img className={s.icon} src={data.associationIcon} alt={`${data.name} football association icon`} />
      </div>
      <h3 className={s.title}>{name}</h3>
    </li>
  )
}