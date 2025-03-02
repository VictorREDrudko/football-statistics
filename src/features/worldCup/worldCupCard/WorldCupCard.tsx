import { NavLink } from "react-router-dom"
import s from './WorldCupCard.module.css'
import { WorldCupTournament } from "data/type-data"
import { nationalTeams } from "data/data"
import { Team } from "../team/Team"

type Props = {
  tournament: WorldCupTournament
}

export const WorldCupCard = ({tournament} : Props) => {
  const numberTournament = tournament.id.split('-')[0]
  const year = tournament.id.split('-')[1]

  // Отрисовка стран (страны) организатора чемпионата мира
  const mappedHostCountries = tournament.hostCountry.map((nameCountry) => {
    return (
      <div key={nationalTeams[nameCountry].id} className={s.country}>
        <Team name={nameCountry} year={year} spanStyle={{fontSize: '1.0rem'}}/>
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
          <span className={s.number}>{numberTournament}</span>
        </div>
        <div className={s.containerHostCountry}> {mappedHostCountries} </div>
        <div className={s.containerBtn}>
          <NavLink className={s.link} to={`final-stage/${year}`}>Final stage</NavLink>
          <NavLink className={s.link} to={`qualification/${year}`}>Qualification</NavLink>
        </div>
      </NavLink>
  </div>
  )
}