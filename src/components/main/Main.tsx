import s from './Main.module.css'
import worldFootballImage from './../../image/football.png'
import { FootballHistory } from './footballHistory/FootballHistory'
import { StructureFifa } from './structureFifa/StructureFifa'
import { Background } from '../background/Background'

type MainType = {
  historyFootball: string[]
  confederations: string[]
}

export const Main = ({historyFootball, confederations} : MainType) => {
  return (
    <div className={s.container}>
      <Background image={worldFootballImage}/>
      <div className={s.containerContent}>
        <StructureFifa confederations={confederations}/>
        <FootballHistory historyFootball={historyFootball}/>
      </div>
    </div>
  )
}