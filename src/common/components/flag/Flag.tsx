import { isCountryActive } from '../../../logics/nationalTeamsLogic/utils/isCountryActive'
import { choiseCurrentFlag } from '../../../utils/choiseCurrentFlag'
import s from './Flag.module.css'

type Props = {
  countryName: string
  year: string
}

export const Flag = ({countryName, year}: Props) => {
  const srcFlag = choiseCurrentFlag({name: countryName, year});

  // Sets styles for existing and non-existing countries
  const classNameIsReal = isCountryActive(countryName) ? `${s.image}` : `${s.imageNoReal}`

  return (
    <img src={srcFlag} alt={`flag ${countryName}`} className={classNameIsReal}/>
  )
}