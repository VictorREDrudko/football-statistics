import { getAllMatchesInGroupStage, getMatchesInPlayOff, getTournament, getUniqueTeamsInPlayOff } from "data/worldCupFinalStage";
import { useParams } from "react-router-dom"
import s from './FinalStage.module.css'
import { Groups } from "./groups/Groups";
import { PlayOffStage } from "./playOffStage/PlayOffStage";

export const FinalStage = () => {
  const { year } = useParams<{ year: string}>();

  const allMatchesInTournament = getTournament(year)
  const matchesInGroup = getAllMatchesInGroupStage(allMatchesInTournament)
  const matchesInPlayOff = getMatchesInPlayOff(allMatchesInTournament)

  const uniqueTeamsInPlayOff = getUniqueTeamsInPlayOff(matchesInPlayOff)

  return (
    <div className={s.container}>
      <Groups matchesInGroup={matchesInGroup} teamsPlayOff={uniqueTeamsInPlayOff} year={year}/>
      <PlayOffStage year={year} matchesInPlayOff={matchesInPlayOff}/>
    </div>
  )
}