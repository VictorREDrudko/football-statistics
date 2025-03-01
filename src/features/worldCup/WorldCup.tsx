import { fifaWorldCup, fifaWorldCupKeys } from "data/data"
import s from './WorldCup.module.css'
import { WorldCupCard } from "./worldCupCard/WorldCupCard"

export const WorldCup = () => {
  const mapped = fifaWorldCupKeys.map((year) => {
    return <WorldCupCard tournament={fifaWorldCup[year]} key={fifaWorldCup[year].id}/>
  })

  return (
    <div className={s.container}>
      {mapped}
    </div>
  )
}