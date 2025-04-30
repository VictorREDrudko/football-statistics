import s from './CountryName.module.css'
import { isCountryActive } from 'logics/nationalTeamsLogic/utils/isCountryActive'
import { choiseCurrentCountryName } from 'utils/choiseCurrentCountryName'

type Props = {
  countryName: string
  year: string
}

export const CountryName = ({countryName, year}: Props) => {
  const name = choiseCurrentCountryName({name: countryName, year});

  // Sets styles for existing and non-existing countries
  const classNameIsReal = isCountryActive(countryName) ? `${s.title}` : `${s.titleNoReal}`

  return (
    <span className={classNameIsReal}>
      {name}
    </span>
  )
}