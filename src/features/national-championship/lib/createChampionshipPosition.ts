import { TeamsStats } from "@/shared/model"
import { FinalPositions } from "../model/types"

export const createChampionshipPosition = (teamsStats: TeamsStats): FinalPositions => {
    const finalPositions: FinalPositions = {
      champions: '',
      runnersUp: '',
      thirdPlace: '',
      fourthPlace: '',
    }
  
    Object.keys(teamsStats).forEach((countryName) => {
      if (teamsStats[countryName].result.champion) {
        finalPositions.champions = countryName
      }
      if (teamsStats[countryName].result.secondPlace) {
        finalPositions.runnersUp = countryName
      }
      if (teamsStats[countryName].result.thirdPlace) {
        finalPositions.fourthPlace = countryName
      }
      if (teamsStats[countryName].result.fourthPlace) {
        finalPositions.fourthPlace = countryName
      }
    })
  return finalPositions
}