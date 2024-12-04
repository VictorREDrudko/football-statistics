import s from './Fifa.module.css'
import fifaImage from './../../assets/background-fifa.png'
import cupImage from './../../assets/world-cup.png'
import { NavLink } from 'react-router-dom'
import { Background } from '../../common/components/background/Background'

type InfoAboutFifa = {
  title: string
  description: string
  tournaments: string
  cup: string
}

const infoAboutFifa : InfoAboutFifa = {
  title: 'International Federation of Association Football',
  description: 'FIFA, is the international self-regulatory governing body of association football, beach soccer, and futsal. It was founded in 1904. Its membership now comprises 211 national associations (six regional confederations: CAF (Africa), AFC (Asia and Australia), UEFA (Europe), CONCACAF (North & Central America and the Caribbean), OFC (Oceania), and CONMEBOL (South America)).',
  tournaments: "is the most important tournament by FIFA",
  cup: 'World Cup - '
}

const description = infoAboutFifa.description.split('.')

export const Fifa = () => {
  return (
    <div className={s.wrapper}>
      <Background image={fifaImage}/>
      <div className={s.wrapperContent}>
        <h2 className={s.title}>{infoAboutFifa.title}</h2>
        <p className={s.description}>{description[0]}</p>
        <p className={s.description}>{description[1]}</p>
        <p className={s.description}>{description[2]}</p>
        <p className={s.description}>{description[3]}</p>
        <div className={s.containerTournaments}>
          <NavLink to={'/fifa/world-cup'} className={s.link}>
            <img className={s.image} src={cupImage} alt="world cup image" />
            <span className={s.cup}>{infoAboutFifa.cup.toUpperCase()}</span>
          </NavLink>
          <p className={s.tournaments}>{infoAboutFifa.tournaments}</p>
        </div>
      </div>
    </div>
  )
}