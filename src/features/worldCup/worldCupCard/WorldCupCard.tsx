import { NavLink } from "react-router-dom"
import s from './WorldCupCard.module.css'
import { WorldCupTournament } from "data/type-data"
import { getCurrentCountryAttribut, nationalTeams } from "data/data"

type Props = {
  tournament: WorldCupTournament
}

export const WorldCupCard = ({tournament} : Props) => {
  const number = tournament.id.split('-')[0]
  const year = tournament.id.split('-')[1]

  const flag = getCurrentCountryAttribut(nationalTeams[tournament.hostCountry[0]].flag)
  const name = getCurrentCountryAttribut(nationalTeams[tournament.hostCountry[0]].name) 

  const country = tournament.hostCountry.length === 1 ? (
    <div className={s.country}>
      <img className={s.flag} src={flag} alt={`flag ${name}`} />
      <span className={s.nameCountry}>{tournament.hostCountry[0]}</span>
    </div>
  ) :
    tournament.hostCountry.map((nameCountry) => {
      return (
        <div key={nationalTeams[nameCountry].id} className={s.country}>
          <img className={s.flag} src={flag} alt={`flag ${name}`} />
          <span className={s.nameCountry}>{nameCountry}</span>
        </div>
      )
    })

  return (
    <div className={s.container}>
      <div className={s.backgroundImage}>
        <img className={s.image} src={tournament.icon} alt={`icon World Cup ${year}`} />
      </div>
      <NavLink to={`${year}`} className={s.containerCard}>
        <div>
          <h2 className={s.year}>{year}</h2>
          <h1 className={s.title}>FIFA WORLD CUP</h1>
        </div>
        <div className={s.containerNumber}>
          <span className={s.number}>{number}</span>
        </div>
        <div className={s.containerHostCountry}> {country} </div>
        <div className={s.containerBtn}>
          <NavLink className={s.link} to={`final-stage/${year}`}>Final stage</NavLink>
          <NavLink className={s.link} to={`qualification/${year}`}>Qualification</NavLink>
        </div>
      </NavLink>
  </div>
  )
}