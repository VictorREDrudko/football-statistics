import s from './Main.module.css'
import worldFootballImage from './../../image/football.png'
import { FootballHistory } from './footballHistory/FootballHistory'
import { StructureFifa } from './structureFifa/StructureFifa'

type MainType = {
  historyFootball: string[]
  confederations: string[]
}

export const Main = ({historyFootball, confederations} : MainType) => {
  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <img src={worldFootballImage} alt='football' className={s.imageFootball}/>
      </div>
      <div className={s.containerContent}>
        <StructureFifa confederations={confederations}/>
        <FootballHistory historyFootball={historyFootball}/>
      </div>
    </div>
  )
}