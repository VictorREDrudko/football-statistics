import { MatchInfo } from "@/features/matchDisplay"


export const generateMatchesByStage = (stages: string[], matches: MatchInfo[]) : MatchInfo[][] => {
  return stages.map(stage => {
    return matches.filter(match => match.stage === stage)
  })
}