import s from './Main.module.css'
import { FootballHistory } from './footballHistory/FootballHistory'
import { InfoFootball } from './infoFootball/InfoFootball'

type MainType = {
  historyFootball: string[]
  confederations: string[]
}

export const Main = ({historyFootball, confederations} : MainType) => {
  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <InfoFootball confederations={confederations}/>
        <FootballHistory historyFootball={historyFootball}/>
      </div>
    </div>
  )
}