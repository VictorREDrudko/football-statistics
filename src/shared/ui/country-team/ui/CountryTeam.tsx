import { Flag } from './flag/Flag'
import { CountryName } from './country-name/CountryName'
import s from './CountryTeam.module.scss'

type Props = {
  countryName: string
  countryFlag: string
  isCountryReal: boolean
  reverse?: boolean
  isName?: boolean
}

export const CountryTeam = ({
  countryName,
  countryFlag,
  isCountryReal,
  reverse = false,
  isName = true,
}: Props) => {
  const reverseClassName = reverse ? `${s.container}` : `${s.containerRevers}`
  const isRealClassName = isCountryReal ? '' : `${s.containerNoReal}`
  const combineClassName = `${reverseClassName} ${isRealClassName}`

  return (
    <div className={combineClassName}>
      <div className={s.containerFlag}>
        <Flag countryName={countryName} flagSrc={countryFlag} />
      </div>
      {isName && <CountryName countryName={countryName} />}
    </div>
  )
}
