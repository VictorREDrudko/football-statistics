import { icons } from "data/data"
import { NavLink } from "react-router-dom"
import s from './CircleConfederCup.module.css'

type Props = {
  title: string
  icon: string
}

export const CircleConfederCup = ({title, icon}: Props) => {
  return (
    <div className={s.containerWorldCup}>
      <NavLink to={'/national-tournaments/uefa-cup'}>
        <div className={s.containerLink}>
          <img className={s.image} src={icon} alt="fifa-world-cup" />
          <span className={s.title}>{title}</span>
        </div>
      </NavLink>
  </div>
  )
}