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

  const HostCountries = tournament.hostCountry.map((countryName, index) => {
    return <CountryTeam   countryName={countryName} 
                          year={yearTournament} 
                          reverse={false}
                          key={index + 1}/>
  })

  // Управление активностью ссылки
  let isDisabledFinalStage
  let isDisabledQualification

  if(tournament.finalStage.length === 0) isDisabledFinalStage = true
  if(tournament.qualification.length === 0) isDisabledQualification = true

  const disabledFinalStage = `${s.link} ${isDisabledFinalStage ? s.disabled : ''}`
  const disabledQualification = `${s.link} ${isDisabledQualification ? s.disabled : ''}`

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
        <NavLink className={disabledFinalStage} to={`final-stage/${yearTournament}`}>Final stage</NavLink>
        <NavLink  className={disabledQualification} to={`qualification/${yearTournament}`}>Qualification</NavLink>
      </div>
    </div>
  )
}