import s from './Main.module.css'
import worldMapImage from './../../image/map-fifa.png'
import worldFootballImage from './../../image/football.png'
import { FootballHistory } from './footballHistory/FootballHistory'
import { StructureFifa } from './structureFifa/StructureFifa'

type MainType = {
  historyFootball: string[]
  structure: string[]
}

export const Main = ({historyFootball, structure} : MainType) => {
  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <img src={worldFootballImage} alt='football' className={s.imageFootball}/>
      </div>
      <div className={s.containerContent}>
        <h1>association football</h1>
        <StructureFifa structure={structure}/>
        <FootballHistory historyFootball={historyFootball}/>
      </div>
    </div>
  )
}