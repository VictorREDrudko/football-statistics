import { worldCupYears } from 'logics/worldCup/worldCupFinalStageLogic'
import s from './WorldCup.module.css'
import { WorldCupCard } from "./worldCupCard/WorldCupCard"
import { worldCupData } from 'data/worldCupData/worldCupData'

export const WorldCup = () => {
  const cardsWorldCup = worldCupYears.map((year) => {
    return <WorldCupCard tournament={worldCupData[year]} key={worldCupData[year].id}/>
  })

  return (
    <div className={s.container}>
      {cardsWorldCup}
    </div>
  )
}