import { Flag } from './flag/Flag'
import s from './CountryTeam.module.scss'

type Props = {
  countryName: string
  flagSrc: string
  isCountryReal: boolean
  reverse?: boolean
}

export const CountryTeam = ({
  countryName,
  flagSrc,
  isCountryReal,
  reverse = false,
}: Props) => {
  const classNameContainer = reverse ? `${s.container}` : `${s.containerRevers}`
  const combainClassTitle = isCountryReal ? `${s.title}` : `${s.titleNoReal}`

  return (
    <div className={classNameContainer}>
      <div className={s.containerFlag}>
        <Flag
          countryName={countryName}
          flagSrc={flagSrc}
          isCountryReal={isCountryReal}
        />
      </div>
      <span className={combainClassTitle}>{countryName}</span>
    </div>
  )
}
