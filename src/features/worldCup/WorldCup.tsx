import { fifaWorldCup, fifaWorldCupKeys, nationalTeams } from "data/data"
import s from './WorldCup.module.css'
import { WorldCupCard } from "./worldCupCard/WorldCupCard"

export const WorldCup = () => {
  const mapped = fifaWorldCupKeys.map((year) => {
    return <WorldCupCard tournament={fifaWorldCup[year]}/>
  })

  return (
    <div className={s.container}>
      {mapped}
    </div>
  )
}