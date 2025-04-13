import { useParams } from "react-router-dom"
import s from './FinalStage.module.css'
import { StatisticsTournament } from "./statisticsTournament/StatisticsTournament";
import { GroupStage } from "./groupStage/GroupStage";
import { getQualifiedTeamsForPlayoff, getTournamentData, worldCupYears } from "logics/worldCup/worldCupFinalStageLogic";
import { PlayOffStage } from "./playOffStage/PlayOffStage";
import { GroupFinalStage } from "./groupFinalStage/GroupFinalStage";

export const FinalStage = () => {
  const { urlYear } = useParams<{ urlYear: string}>();
  const year = urlYear && worldCupYears.includes(urlYear) ? urlYear : '1930';

  const tournamentData = getTournamentData(year)
  const matches = tournamentData.finalStage

  const groupStageMatches = matches.filter(match => {
    return match.stage.slice(0, 5) === "group" && match.stage.split(":")[0].trim() !== "group Final round"
  })
  const playOffStageMatches = matches.filter(match => match.stage.slice(0, 5) !== "group")
  const groupFinalRoundMatches = matches.filter(match => match.stage.split(":")[0].trim() === "group Final round")

  const hasMatchesGroupStage = groupStageMatches.length === 0 ? false : true
  const hasMatchesPlayoffStage = playOffStageMatches.length === 0 ? false : true
  const hasMatchesGroupFinalRound = groupFinalRoundMatches.length === 0 ? false : true

  const qualifiedTeamsForPlayoff = getQualifiedTeamsForPlayoff(playOffStageMatches)
  const qualifiedTeamsForGroupFinalRound = getQualifiedTeamsForPlayoff(groupFinalRoundMatches)

  const qualifiedTeams = hasMatchesGroupFinalRound ? qualifiedTeamsForGroupFinalRound : qualifiedTeamsForPlayoff

  return (
    <div className={s.container}>
      <StatisticsTournament tournamentData={tournamentData}/>
      {hasMatchesGroupStage && <GroupStage  groupStageMatches={groupStageMatches} 
                                            qualifiedTeamsForPlayoff={qualifiedTeams} 
                                            year={year}/>}
      {hasMatchesPlayoffStage && <PlayOffStage year={year} playOffStageMatches={playOffStageMatches}/>}
      {hasMatchesGroupFinalRound && <GroupFinalStage  groupStageMatches={groupFinalRoundMatches} 
                                                      year={year}/>}
    </div>
  )
}