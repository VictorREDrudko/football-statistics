import { NavLink } from "react-router-dom"
import s from './NationaleTournament.module.css'
import { Tournament } from "../../../data/type-data"

type Props = {
  tournament: Tournament
}

export const NationaleTournament = ({tournament}: Props) => {
  const changeSize = tournament.id === '1-worldCup' ? tournament.size : ''

  return (
    <div className={s.containerWorldCup} style={{ backgroundColor: tournament.color, width: changeSize, height: changeSize}}>
      <NavLink to={tournament.path}>
        <div className={s.containerLink}>
          <img className={s.image} src={tournament.iconCup} alt={tournament.title} />
          <span className={s.title}>{tournament.title}</span>
        </div>
      </NavLink>
  </div>
  )
}