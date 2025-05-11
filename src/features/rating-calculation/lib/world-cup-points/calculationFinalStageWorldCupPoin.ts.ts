import { TeamStats } from "@/entities"
import { baseRatingPoints } from "../../model/baseRatingPoints"

export const calculationFinalStageWorldCupPoints = (teamStats: TeamStats) => {
  if(!teamStats) {
    return 0
  }

  const stats = baseRatingPoints.worldCup

  const {wins, drawn} = teamStats.resultMatches
  const { champion, 
          secondPlace, 
          thirdPlace, 
          fourthPlace, 
          semiFinals, 
          quarterfinals, 
          roundOf16, 
          roundOf32,
          finalGroupRound,
          secondGroupRound
        } = teamStats.placeByYears

  const appearancesPoints = teamStats.appearances.length * stats.appearances;
  const matchesPoints = (wins * stats.winsMatches) + (drawn * stats.drawnMatches);

  const placePoints = (champion.length * stats.champion) + (secondPlace.length * stats.secondPlace)
                    + (thirdPlace.length * stats.thirdPlace) + (fourthPlace.length * stats.fourthPlace)
                    + (semiFinals.length * stats.semiFinals) + (quarterfinals.length * stats.quarterfinals)
                    + (roundOf16.length * stats.roundOf16) + (roundOf32.length * stats.roundOf32)
                    + (finalGroupRound.length * stats.finalGroupRound) + (secondGroupRound.length * stats.secondGroupRound)

  return appearancesPoints + matchesPoints + placePoints
}