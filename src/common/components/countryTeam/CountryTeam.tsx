import { CountryName } from '../counrtyName/CountryName'
import { Flag } from '../flag/Flag'
import s from './CountryTeam.module.css'

type Props = {
  countryName: string
  year: string
  reverse?: boolean
}

export const CountryTeam = ({countryName, year, reverse = false}: Props) => {
  const classNameContainer = reverse ? `${s.container}` : `${s.containerRevers}`

  return (
    <div className={classNameContainer}>
      <div className={s.containerFlag}>
        <Flag countryName={countryName} year={year}/>
      </div>
      <CountryName countryName={countryName} year={year}/>
    </div>
  )
}