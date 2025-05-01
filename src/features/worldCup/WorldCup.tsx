import { worldCupData } from "../../data/worldCupData/worldCupData"
import { worldCupYears } from "../../logics/worldCup/worldCupFinalStageLogic"
import { WorldCupCard } from "./worldCupCard/WorldCupCard"
import s from "./WorldCup.module.css"


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