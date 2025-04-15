import { nationalTeams } from 'data/nationalTeamsData/nationalTeams'
import s from './Flag.module.css'
import { choiseCountryFlag } from 'utils/choiseCountryFlagAndName'

type Props = {
  countryName: string
  year: string
  style?: React.CSSProperties;
}

export const Flag = ({countryName, year, style}: Props) => {
  const srcFlag = countryName !== '' ? choiseCountryFlag(nationalTeams[countryName].flags, year) : ''

  const classNameIsReal = nationalTeams[countryName].isCountryReal ? `${s.image}` : `${s.imageNoReal}`

  return (
    countryName && <img src={srcFlag} alt={`flag ${countryName}`} className={classNameIsReal} style={style}/>
  )
}