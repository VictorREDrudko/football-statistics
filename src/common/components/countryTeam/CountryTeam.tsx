import { choiseCountryName } from 'utils/choiseCountryFlagAndName'
import { Flag } from '../flag/Flag'
import s from './CountryTeam.module.css'
import { nationalTeams } from 'data/nationalTeams'

type Props = {
  countryName: string
  year: string
  style?: React.CSSProperties;
  styleFlag?: React.CSSProperties;
}

export const CountryTeam = ({countryName, year, style, styleFlag}: Props) => {
  const name = choiseCountryName(nationalTeams[countryName].names, year);

  return (
    <div className={s.container}>
      <Flag countryName={countryName} year={year} style={styleFlag}/>
      <span className={s.title} style={style}>
        {name}
      </span>
    </div>
  )
}