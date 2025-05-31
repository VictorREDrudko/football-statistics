import { CountryTeam } from '@/shared'
import s from './ChampionTournament.module.scss'

type Props = {
  countryName: string
  year: string
  iconPathCup: string
  tournamentTitle: string
}

export const ChampionTournament = ({countryName, year, iconPathCup, tournamentTitle} : Props) => {
  return (
    <div className={s.container}>
      <div className={s.containerChampionCountry}>
        <CountryTeam countryName={countryName} year={year}/>
        <img className={s.image} src={iconPathCup} alt={`Cup ${tournamentTitle}`} />
      </div>
    </div>
  )
}