import { Country, nationalTeamsStore } from '@/shared/model'
import { choiseCurrentFlagByYear } from '../../lib/choiseCurrentFlagByYear'
import s from './Flag.module.scss'

type Props = {
  countryName: string
  year: string
}

export const Flag = ({ countryName, year }: Props) => {
  const srcFlag = choiseCurrentFlagByYear(countryName, year)
  const isCountryReal = nationalTeamsStore[countryName as Country].isCountryReal

  const combineClass = isCountryReal ? `${s.flag}` : `${s.flagNoReal}`

  return (
    <img src={srcFlag} alt={`flag ${countryName}`} className={combineClass} />
  )
}
