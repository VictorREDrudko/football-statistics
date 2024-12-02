import { Country } from "../../countries/Country"
import { InfoAboutGoals } from "./infoAboutGoals/InfoAboutGoals"
import s from './InfoAboutTeamInMatch.module.css'

export type PlayersForwardType = {
  players: string[]
  timeGoals: string[] 
}

type InfoAboutTeamInMatchProps = {
  team: string
  forwards: PlayersForwardType
  year: string
}

export const InfoAboutTeamInMatch = (props: InfoAboutTeamInMatchProps) => {
  return (
    <div className={s.container}>
      <Country name={props.team} year={props.year}/>
      <InfoAboutGoals forwards={props.forwards}/>
    </div>
  )
}