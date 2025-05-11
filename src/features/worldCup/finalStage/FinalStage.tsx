import { useParams } from "react-router-dom"
import s from './FinalStage.module.css'
import { StatisticsTournament } from "./statisticsTournament/StatisticsTournament";
import { GroupStage } from "./groupStage/GroupStage";
import { PlayOffStage } from "./playOffStage/PlayOffStage";
import { GroupSecondStage } from "./groupSecondStage/GroupSecondStage";
import { getQualifiedTeamsForPlayoff, getTournamentData, worldCupYears } from "../../../logics/worldCup/worldCupFinalStageLogic";
import { GroupFinalStage } from "./groupFinalStage/GroupFinalStage";

export const FinalStage = () => {
  const { urlYear } = useParams<{ urlYear: string}>();
  const year = urlYear && worldCupYears.includes(urlYear) ? urlYear : '1930';

  const tournamentData = getTournamentData(year)
  const matches = tournamentData.finalStage

  const groupStageMatches = matches.filter(match => {
    return match.stage.slice(0, 5) === "group" && match.stage.split(":")[0].trim() !== "group Final round" && match.stage.split("(")[1] !== "second round)"
  })
  const playOffStageMatches = matches.filter(match => match.stage.slice(0, 5) !== "group")
  const finalRoundMatches = matches.filter(match => match.stage.split(":")[0].trim() === "group Final round")
  const groupSecondGroupRoundMatches = matches.filter(match => match.stage.split("(")[1] === "second round)")

  const hasMatchesGroupStage = groupStageMatches.length
  const hasMatchesPlayoffStage = playOffStageMatches.length
  const hasMatchesGroupFinalRound = finalRoundMatches.length
  const hasMatchesGroupSecondRound = groupSecondGroupRoundMatches.length === 0 ? false : groupSecondGroupRoundMatches.length

  const qualifiedTeamsForPlayoff = getQualifiedTeamsForPlayoff(playOffStageMatches)
  const qualifiedTeamsForGroupFinalRound = getQualifiedTeamsForPlayoff(finalRoundMatches)
  const qualifiedTeamsForSecondGroupRound = getQualifiedTeamsForPlayoff(groupSecondGroupRoundMatches)

  const qualifiedTeamsPlayoff = hasMatchesGroupFinalRound ? qualifiedTeamsForGroupFinalRound
                         : hasMatchesGroupSecondRound ? qualifiedTeamsForSecondGroupRound : qualifiedTeamsForPlayoff

  const qualifiedTeamsSecondRound = qualifiedTeamsForPlayoff

  return (
    <div className={s.container}>
      <StatisticsTournament tournamentData={tournamentData}/>
      {hasMatchesGroupStage && <GroupStage  groupStageMatches={groupStageMatches} 
                                            qualifiedTeamsForPlayoff={qualifiedTeamsPlayoff} 
                                            year={year}/>}
      {hasMatchesGroupSecondRound && <GroupSecondStage  groupStageMatches={groupSecondGroupRoundMatches} 
                                                        qualifiedTeamsForPlayoff={qualifiedTeamsSecondRound} 
                                                        year={year}/>}
      {hasMatchesPlayoffStage && <PlayOffStage year={year} playOffStageMatches={playOffStageMatches}/>}
      {hasMatchesGroupFinalRound && <GroupFinalStage  groupStageMatches={finalRoundMatches} 
                                                      year={year}/>}
    </div>
  )
}