import { getAllMatchesInGroupStage, getMatchesInPlayOff, getTournament, getUniqueTeamsInPlayOff } from "data/worldCupFinalStage";
import { useParams } from "react-router-dom"
import s from './FinalStage.module.css'
import { Groups } from "./groups/Groups";
import { KnockoutStage } from "./knockout-stage/KnockoutStage";

export const FinalStage = () => {
  const { year } = useParams<{ year: string}>();

  const allMatchesInTournament = getTournament(year)
  const matchesInGroup = getAllMatchesInGroupStage(allMatchesInTournament)
  const matchesInPlayOff = getMatchesInPlayOff(allMatchesInTournament)
  const uniqueTeamsInPlayOff = getUniqueTeamsInPlayOff(matchesInPlayOff)

  return (
    <div className={s.container}>
      <h2 className={s.titleStage}>Group stage</h2>
      <Groups matchesInGroup={matchesInGroup} teamsPlayOff={uniqueTeamsInPlayOff} year={year}/>
      <h2 className={s.titleStage}>Knockout stage</h2>
      <KnockoutStage matches={matchesInPlayOff}/>
    </div>
  )
}