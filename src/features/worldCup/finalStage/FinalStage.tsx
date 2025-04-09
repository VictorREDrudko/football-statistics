import { useParams } from "react-router-dom"
import s from './FinalStage.module.css'
import { StatisticsTournament } from "./statisticsTournament/StatisticsTournament";
import { GroupStage } from "./groupStage/GroupStage";
import { getQualifiedTeamsForPlayoff, getTournamentData, worldCupYears } from "logics/worldCup/worldCupFinalStageLogic";
import { PlayOffStage } from "./playOffStage/PlayOffStage";

export const FinalStage = () => {
  const { urlYear } = useParams<{ urlYear: string}>();
  const year = urlYear && worldCupYears.includes(urlYear) ? urlYear : '1930';

  const tournamentData = getTournamentData(year)
  const matches = tournamentData.finalStage

  const groupStageMatches = matches.filter(match => match.stage.slice(0, 5) === "group")
  const playOffStageMatches = matches.filter(match => match.stage.slice(0, 5) !== "group")

  const qualifiedTeamsForPlayoff = getQualifiedTeamsForPlayoff(playOffStageMatches)

  const hasMatchesGroupStage = groupStageMatches.length === 0 ? false : true

  return (
    <div className={s.container}>
      <StatisticsTournament tournamentData={tournamentData}/>
      {hasMatchesGroupStage && <GroupStage groupStageMatches={groupStageMatches} qualifiedTeamsForPlayoff={qualifiedTeamsForPlayoff} year={year}/>}
      <PlayOffStage year={year} playOffStageMatches={playOffStageMatches}/>
    </div>
  )
}