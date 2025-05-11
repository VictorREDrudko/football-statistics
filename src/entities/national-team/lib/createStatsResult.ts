import { StatsResult } from "../model/types/types"
import { classNamesItem } from "./classNamesItem"
import cup from './../assets/icon-card/cup.png'
import medal2 from './../assets/icon-card/medal2.png'
import medal3 from './../assets/icon-card/medal3.png'
import iconMatches from './../assets/icon-card/matches.png'
import { TeamStats } from "@/entities"

export const createStatsResult = (stats: TeamStats, titleCompetition: string, countryName:string ): StatsResult => {
  let matches = Object.values(stats.resultMatches).map(String)
  
  return {
      countryName,
      titleCompetition,
      resultsMedal: [
      {
        title: "champion",
        count: stats.placeByYears.champion.length,
        details: stats.placeByYears.champion,
        iconPath: cup,
        typeTotal: classNamesItem.circleLarge,
      },
      {
        title: "runner-up",
        count: stats.placeByYears.secondPlace.length,
        details: stats.placeByYears.secondPlace,
        iconPath: medal2,
        typeTotal: classNamesItem.circleMedium,
      },
      {
        title: "third-place",
        count: stats.placeByYears.thirdPlace.length,
        details: stats.placeByYears.thirdPlace,
        iconPath: medal3,
        typeTotal: classNamesItem.circleMedium,
      }
    ],
    resultsMatches: {
      title: "matches",
      count: stats.matches,
      details: matches,
      iconPath: iconMatches,
      typeTotal: classNamesItem.squareSmall,
    },
    resultsAppearances: {
      title: "appearances",
      count: stats.appearances.length,
      details: stats.appearances,
      iconPath: iconMatches,
      typeTotal: classNamesItem.squareLarge,
    },
  }
}