import s from './Fifa.module.css'
import world_cup from './../../image/background-world-cup.png'
import { Background } from '../background/Background'
import { NavLink } from 'react-router-dom'

type FifaType = {
  tournamentsWorldCup: number[]
}


export const Fifa = ({tournamentsWorldCup}: FifaType) => {
  const mappedTournaments = tournamentsWorldCup.map((el, index) => {
    return (
      <li key={index} className={s.item}>
        <NavLink to={`/fifa/${el}`}>{el}</NavLink>
      </li>
    )
  })

  return (
    <div className={s.wrapper}>
      <Background image={world_cup}/>
      <div className={s.wrapperContent}>
        <h2>International Federation of Association Football</h2>
        <p> FIFA, is the international self-regulatory governing body of association football, beach soccer, 
            and futsal. It was founded in 1904. Its membership now comprises 211 national associations. These 
            national associations must also be members of one of the six regional confederations: CAF (Africa), 
            AFC (Asia and Australia), UEFA (Europe), CONCACAF (North & Central America and the Caribbean), OFC 
            (Oceania), and CONMEBOL (South America).
        </p>
        <div>
          <h2 className={s.title}>Tournaments FIFA World Cup</h2>
          <ul className={s.containerTournaments}>{mappedTournaments}</ul>
        </div>
        <div>
          <h2 className={s.title}>Tournaments FIFA World Cup</h2>
          <ul className={s.containerTournaments}>{mappedTournaments}</ul>
        </div>

      </div>





      {/* <div className={s.wrapperCard}>
        <div className={s.wrapperImg}>
          <img src={img1930} alt="logo-FIFA-World-Cup-1930" />
        </div>
        <h3>1930 FIFA World Cup</h3>
        <div className={s.wrapperContent}>
          <div>
            <span className={s.title}>Host country: </span> 
            <span>Uruguay</span>
          </div>
          <div>
            <span className={s.title}>Teams: </span> 
            <span>13</span>
          </div>
          <div>
            <span className={s.title}>Matches played: </span> 
            <span>18</span>
          </div>
          <div>
            <span className={s.title}>Goals scored: </span> 
            <span>70</span>
          </div>
          <div>
            <span className={s.title}>Goals per match: </span> 
            <span>3.89</span>
          </div>
        </div>
      </div> */}
    </div>
  )
}