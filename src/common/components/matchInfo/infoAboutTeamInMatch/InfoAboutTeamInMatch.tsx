import { Goals } from "../../../../app/App"
import { Country } from "../../countries/Country"
import { InfoAboutGoals } from "./infoAboutGoals/InfoAboutGoals"
import s from './InfoAboutTeamInMatch.module.css'

type InfoAboutTeamInMatchProps = {
  team: string
  forwards: Goals
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