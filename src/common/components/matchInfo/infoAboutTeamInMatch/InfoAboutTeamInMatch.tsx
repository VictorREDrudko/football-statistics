import { Goals } from "data/type-data"
import { InfoAboutGoals } from "./infoAboutGoals/InfoAboutGoals"
import s from './InfoAboutTeamInMatch.module.css'
import { Team } from "features/worldCup/team/Team"

type InfoAboutTeamInMatchProps = {
  nameTeam: string
  forwards: Goals
  year: string
}

export const InfoAboutTeamInMatch = ({nameTeam, forwards, year}: InfoAboutTeamInMatchProps) => {

  return (
    <div className={s.container}>
      <Team name={nameTeam} year={year} spanStyle={{fontSize: '1.0rem', margin: '0', width: '150px'}}/>
      <InfoAboutGoals forwards={forwards}/>
    </div>
  )
}