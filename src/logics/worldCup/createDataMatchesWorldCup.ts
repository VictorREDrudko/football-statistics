import { classNameResult } from "data/nationalTeamsData/classNameResult";
import { TeamWorldCupAchievements } from "./createTeamWorldCupAchievements";
import { WorldCupPosition } from "./createWorldCupPosition";

export const createDataMatchesWorldCup = (resultsData: TeamWorldCupAchievements): WorldCupPosition[] => {
  return (
    [
      {
        value: resultsData.countAppearances,
        typeTotal: classNameResult.squareLarge,
        years: resultsData.yearsAppearances,
        description: "appearances"
      }, 
      {
        value: resultsData.countMatches,
        typeTotal: classNameResult.squareSmall,
        years: resultsData.yearsAppearances,
        description: "matches"
      },
    ]
  )
}