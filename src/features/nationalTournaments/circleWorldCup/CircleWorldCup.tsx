import { icons } from "data/data"
import { NavLink } from "react-router-dom"
import s from './CircleWorldCup.module.css'

export const CircleWorldCup = () => {
  return (
    <div className={s.containerWorldCup}>
      <NavLink to={'/national-tournaments/world-cup'}>
        <div className={s.containerLink}>
          <img className={s.image} src={icons.trophyTournaments.iconWorldCup} alt="fifa-world-cup" />
          <span className={s.title}>FIFA World Cup</span>
        </div>
      </NavLink>
  </div>
  )
}