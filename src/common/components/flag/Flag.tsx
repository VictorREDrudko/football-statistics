import { nationalTeams } from 'data/nationalTeams'
import s from './Flag.module.css'
import { choiseCountryFlag } from 'utils/choiseCountryFlagAndName'

type Props = {
  countryName: string
  year: string
  style?: React.CSSProperties;
}

export const Flag = ({countryName, year, style}: Props) => {
  const srcFlag = countryName !== '' ? choiseCountryFlag(nationalTeams[countryName].flags, year) : ''
  const noCoutryName = countryName !== '' ? true : false

  return (
    noCoutryName && <img src={srcFlag} alt={`flag ${countryName}`} className={s.image} style={style}/>
  )
}