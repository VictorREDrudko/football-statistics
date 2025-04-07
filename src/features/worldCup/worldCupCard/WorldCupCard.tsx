import { NavLink } from "react-router-dom"
import s from './WorldCupCard.module.css'
import { getYearTournament } from "utils/getYearTournament"
import { getNumberTournament } from "utils/getNumberTournament"
import { CountryTeam } from "common/components/countryTeam/CountryTeam"
import { WorldCupInfo } from "data/worldCupData/type-worldCupData"

type Props = {
  tournament: WorldCupInfo
}

export const WorldCupCard = ({tournament} : Props) => {
  const numberTournament = getNumberTournament(tournament.id)
  const yearTournament = getYearTournament(tournament.id)

  const HostCountries = tournament.hostCountry.map((countryName) => {
    return <CountryTeam   countryName={countryName} 
                          year={yearTournament} 
                          style={{fontSize: '1rem'}}
                          styleFlag={{width: '2.5rem'}}/>
  })

  return (
    <div className={s.container}>
      <div className={s.containerImage}>
        <img className={s.image} src={tournament.icon} alt={`icon World Cup ${yearTournament}`} />
      </div>
      <h2 className={s.year}>{yearTournament}</h2>
      <h1 className={s.title}>FIFA WORLD CUP</h1>
      <div className={s.containerNumber}>
        <span className={s.number}>{numberTournament}</span>
      </div>
      <div className={s.wrapperHostCountry}>
        <div className={s.containerHostCountry}>
          {HostCountries}
        </div>
      </div>
      <div className={s.containerLink}>
        <NavLink className={s.link} to={`final-stage/${yearTournament}`}>Final stage</NavLink>
        <NavLink className={s.link} to={`qualification/${yearTournament}`}>Qualification</NavLink>
      </div>
    </div>
  )
}