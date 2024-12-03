import s from './Main.module.css'
import worldFootballImage from './../../../assets/football.png'
import { FootballHistory } from './footballHistory/FootballHistory'
import { Background } from '../background/Background'
import { InfoFootball } from './infoFootball/InfoFootball'

type MainType = {
  historyFootball: string[]
  confederations: string[]
}

export const Main = ({historyFootball, confederations} : MainType) => {
  return (
    <div className={s.container}>
      <Background image={worldFootballImage}/>
      <div className={s.containerContent}>
        <InfoFootball confederations={confederations}/>
        <FootballHistory historyFootball={historyFootball}/>
      </div>
    </div>
  )
}