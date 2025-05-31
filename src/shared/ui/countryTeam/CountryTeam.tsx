import { Flag } from '@/shared'
import s from './CountryTeam.module.scss'
import { getCountryNameByYear } from '@/shared/lib/helpers/getCountryNameByYear'
import { isCountryActive } from '@/shared/lib/helpers/isCountryActive'

type Props = {
  countryName: string
  year: string
  reverse?: boolean
}

export const CountryTeam = ({countryName, year, reverse = false}: Props) => {
  const classNameContainer = reverse ? `${s.container}` : `${s.containerRevers}`
  const countryNameByYear = getCountryNameByYear({countryName, year});

  // Sets styles for existing and non-existing countries
  const classNameIsReal = isCountryActive(countryName) ? `${s.title}` : `${s.titleNoReal}`

  return (
    <div className={classNameContainer}>
      <div className={s.containerFlag}>
        <Flag countryName={countryName} year={year}/>
      </div>
      <span className={classNameIsReal}>
        {countryNameByYear}
      </span>
    </div>
  )
}