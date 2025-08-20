import { Country, nationalTeamsStore } from '@/shared/model'
import { choiseCountryNameByYear } from '../lib/choiseCountryNameByYear'
import s from './CountryTeam.module.scss'
import { Flag } from './flag/Flag'

type Props = {
  countryName: string
  year: string
  reverse?: boolean
  classNameSpan?: string
}

export const CountryTeam = ({
  countryName,
  year,
  reverse = false,
  classNameSpan = '',
}: Props) => {
  const countryNameByYear = choiseCountryNameByYear(countryName, year)
  const isCountryReal = nationalTeamsStore[countryName as Country].isCountryReal

  const classNameContainer = reverse ? `${s.container}` : `${s.containerRevers}`
  const combainClassTitle = isCountryReal
    ? `${s.title} ${classNameSpan}`
    : `${s.titleNoReal} ${classNameSpan}`

  return (
    <div className={classNameContainer}>
      <div className={s.containerFlag}>
        <Flag countryName={countryName} year={year} />
      </div>
      <span className={combainClassTitle}>{countryNameByYear}</span>
    </div>
  )
}
