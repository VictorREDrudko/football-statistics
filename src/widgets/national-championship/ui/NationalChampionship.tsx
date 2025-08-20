import { ConfederationCode, confederationData } from "@/entities"
import { getQualifiedTeamsForPlayoff } from "@/logics/worldCup/worldCupFinalStageLogic"
import { GroupFinalStage } from "@/features/worldCup/finalStage/groupFinalStage/GroupFinalStage"
import { GroupSecondStage } from "@/features/worldCup/finalStage/groupSecondStage/GroupSecondStage"
import { PlayOffStage } from "@/features/worldCup/finalStage/playOffStage/PlayOffStage"
import { GroupRound } from "./group-round/GroupRound"
import { KnockoutStage } from "./knockout-stage/KnockoutStage"
import { uniqueTeamsFromMatches } from "../lib/uniqueTeamsFromMatches"
import { ChampionshipInfo, MatchInfo } from "@/shared/model"
import { getChampionshipYear } from "@/shared/lib"
import { ChampionshipStat } from "./championship-stat/ChampionshipStat"

type Props = {
  championshipData: ChampionshipInfo 
}

export const NationalChampionship = ({championshipData}: Props) => {
  const year = getChampionshipYear(championshipData.title)
  const matches = championshipData.finalStage
  const groupRoundMatches = matches.filter(match => match.stage.slice(0, 5) === "group")
  const hasGroupRoundMatches = groupRoundMatches.length
  
  const knockoutStageMatches: MatchInfo[] = matches.filter(match => match.stage.slice(0, 5) !== "group")
  const qualifiedTeams: string[] = uniqueTeamsFromMatches(knockoutStageMatches)
  const hasKnockoutStageMatches = knockoutStageMatches.length

  // -- - - - -  - - - - - - -  - -
  // const groupStageMatches = matches.filter(match => {
  //   return match.stage.slice(0, 5) === "group" && match.stage.split(":")[0].trim() !== "group Final round" && match.stage.split("(")[1] !== "second round)"
  // })
  // const playOffStageMatches = matches.filter(match => match.stage.slice(0, 5) !== "group")
  // const finalRoundMatches = matches.filter(match => match.stage.split(":")[0].trim() === "group Final round")
  // const groupSecondGroupRoundMatches = matches.filter(match => match.stage.split("(")[1] === "second round)")

  // const hasMatchesGroupStage = groupStageMatches.length
  // const hasMatchesPlayoffStage = playOffStageMatches.length
  // const hasMatchesGroupFinalRound = finalRoundMatches.length
  // const hasMatchesGroupSecondRound = groupSecondGroupRoundMatches.length === 0 ? false : groupSecondGroupRoundMatches.length

  // const qualifiedTeamsForPlayoff = getQualifiedTeamsForPlayoff(playOffStageMatches)
  // const qualifiedTeamsForGroupFinalRound = getQualifiedTeamsForPlayoff(finalRoundMatches)
  // const qualifiedTeamsForSecondGroupRound = getQualifiedTeamsForPlayoff(groupSecondGroupRoundMatches)

  // const qualifiedTeamsPlayoff = hasMatchesGroupFinalRound ? qualifiedTeamsForGroupFinalRound
  //                        : hasMatchesGroupSecondRound ? qualifiedTeamsForSecondGroupRound : qualifiedTeamsForPlayoff

  // const qualifiedTeamsSecondRound = qualifiedTeamsForPlayoff
  return (
    <>
      <ChampionshipStat championshipData={championshipData} 
                            year={year}
      />
      {hasGroupRoundMatches && <GroupRound  background={championshipData.background}
                                            matches={groupRoundMatches} 
                                            qualifiedTeams={qualifiedTeams} 
                                            year={year}/>
      }

      {/* {hasMatchesGroupStage && <GroupStage  groupStageMatches={groupStageMatches} 
                                            qualifiedTeamsForPlayoff={qualifiedTeamsPlayoff} 
                                            year={year}/>} */}
      {/* {hasMatchesGroupSecondRound && <GroupSecondStage  groupStageMatches={groupSecondGroupRoundMatches} 
                                                        qualifiedTeamsForPlayoff={qualifiedTeamsSecondRound} 
                                                        year={year}/>} */}
      {hasKnockoutStageMatches && <KnockoutStage  background={championshipData.background}
                                                  matches={knockoutStageMatches}
                                                  organizationCode={'WORLD'}/>
      }
      {/* {hasMatchesGroupFinalRound && <GroupFinalStage  groupStageMatches={finalRoundMatches} 
                                                      year={year}/>} */}
    </>
  )
}