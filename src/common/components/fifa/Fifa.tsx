import s from './Fifa.module.css'
import fifaImage from './../../../image/background-fifa.png'
import cupImage from './../../../image/world-cup.png'
import { Background } from '../background/Background'
import { NavLink } from 'react-router-dom'

type InfoAboutFifa = {
  title: string
  description: string
  tournaments: string
  cup: string
}

const infoAboutFifa : InfoAboutFifa = {
  title: 'International Federation of Association Football',
  description: 'FIFA, is the international self-regulatory governing body of association football, beach soccer, and futsal. It was founded in 1904. Its membership now comprises 211 national associations. These national associations must also be members of one of the six regional confederations: CAF (Africa), AFC (Asia and Australia), UEFA (Europe), CONCACAF (North & Central America and the Caribbean), OFC (Oceania), and CONMEBOL (South America).',
  tournaments: "FIFA is responsible for organizing football's international tournaments, notably the ",
  cup: 'World Cup'
}


export const Fifa = () => {
  return (
    <div className={s.wrapper}>
      <Background image={fifaImage}/>
      <div className={s.wrapperContent}>
        <h2 className={s.title}>{infoAboutFifa.title}</h2>
        <p className={s.description}>{infoAboutFifa.description}</p>
        <p className={s.tournaments}>
          {infoAboutFifa.tournaments} 
          <span className={s.cup}>{infoAboutFifa.cup.toUpperCase()}</span>
        </p>
        <NavLink to={'/world-cup'}>
          <img className={s.image} src={cupImage} alt="world cup image" />
        </NavLink>
      </div>
    </div>
  )
}