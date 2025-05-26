import { Flag } from '@/shared'
import s from './CountryTeam.module.scss'
import { isCountryActive } from '../utils/isCountryActive'
import { choiseCurrentCountryName } from '../utils/choiseCurrentCountryName'

type Props = {
  countryName: string
  year: string
  reverse?: boolean
}

export const CountryTeam = ({countryName, year, reverse = false}: Props) => {
  // const classNameContainer = reverse ? `${s.container}` : `${s.containerRevers}`
  const classNameContainer = reverse ? `${s.container}` : `${s.containerRevers}`
  const currentCountryName = choiseCurrentCountryName({name: countryName, year});

  // Sets styles for existing and non-existing countries
  const classNameIsReal = isCountryActive(countryName) ? `${s.title}` : `${s.titleNoReal}`

  return (
    <div className={classNameContainer}>
      <div className={s.containerFlag}>
        <Flag countryName={countryName} year={year}/>
      </div>
      <span className={classNameIsReal}>
        {currentCountryName}
      </span>
    </div>
  )
}