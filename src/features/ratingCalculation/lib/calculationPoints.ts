import { TeamsFullStats } from "@/entities"
import { calculationFinalStageWorldCupPoints } from "./world-cup-points/calculationFinalStageWorldCupPoin.ts";

export const calculationPoints = (countryName: string, teamsStats: TeamsFullStats) => {
  const finalStageWorldCupPoints = calculationFinalStageWorldCupPoints(teamsStats.worldCupStats.teamsStats[countryName]);
  const qualificationWorldCupPoints = 0;
  const finalStageNationalCompetitionPoints = 0;
  const qualificationNationalCompetitionPoints = 0;

  const points = finalStageWorldCupPoints + qualificationWorldCupPoints + finalStageNationalCompetitionPoints + qualificationNationalCompetitionPoints

  return points
}