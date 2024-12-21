// import { NavLink } from 'react-router-dom'
import world_cup from './../../../assets/background-world-cup.png'
import s from './WorldCup.module.css'
import { Background } from '../../../common/components/background/Background'

type FifaProps = {
  tournamentsWorldCup: number[]
  changeYear: (year: string) => void
}

export const WorldCup = (props: FifaProps) => {
  const mappedTournaments = props.tournamentsWorldCup.map((el, index) => {
    return (
      <li onClick={() => props.changeYear(el.toString())} key={index} className={s.item}>
        {/* <NavLink to={`/fifa/world-cup/${el}`}>{el}</NavLink> */}
      </li>
    )
  })

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Tournaments FIFA World Cup</h2>
      <ul className={s.containerTournaments}>{mappedTournaments}</ul>
    </div>
  )
}
