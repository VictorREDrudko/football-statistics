import { NationalTeam } from 'data/type-nationalTeams'
import s from './ListNationalTeams.module.css'
import { getCurrentCountryAttribut } from 'data/data'

type Props = {
  data: NationalTeam
  setTeam: (team: string) => void
  navigateToTeam: (team: string) => void;
}

export const ListNationalTeams = ({data, setTeam, navigateToTeam}: Props) => {
  const showInfoTeam = () => {
    setTeam(getCurrentCountryAttribut(data.names));
    navigateToTeam(getCurrentCountryAttribut(data.names));
  }

  const flag = getCurrentCountryAttribut(data.flags)
  const name = getCurrentCountryAttribut(data.names)

  return (
    <li className={s.container} onClick={showInfoTeam}>
      <div className={s.containerIcon}>
        <img className={s.flag} src={flag} alt={`${name} flag picture` } />
        <img className={s.icon} src={data.associationIcon} alt={`${data.names} football association icon`} />
      </div>
      <h3 className={s.title}>{name}</h3>
    </li>
  )
}