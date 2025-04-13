import { classNameResult } from "data/nationalTeamsData/classNameResult";
import { TeamWorldCupAchievements } from "./createTeamWorldCupAchievements";

export type WorldCupPosition = {
  value: number
  typeTotal: string
  years: string[]
  description: string
}

export const createWorldCupPosition = (resultsData: TeamWorldCupAchievements): WorldCupPosition[] => {
  return (
    [
      {
        value: resultsData.countFirstPlace,
        typeTotal: classNameResult.circleLarge,
        years: resultsData.yearsFirstPlace,
        description: "champion"
      }, 
      {
        value: resultsData.countSecondPlace,
        typeTotal: classNameResult.circleMedium,
        years: resultsData.yearsSecondPlace,
        description: "runner-up"
      },
      {
        value: resultsData.countThirdPlace,
        typeTotal: classNameResult.circleSmall,
        years: resultsData.yearsThirdPlace,
        description: "third-place"
      },
    ]
  )
}