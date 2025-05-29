import { StatsTeamsData } from "../types"

export const updateTeamStats = (teamStats: StatsTeamsData, goalsFor: number, goalsAgainst: number) => {
  teamStats.goalsFor += goalsFor
  teamStats.goalsAgainst += goalsAgainst

  if (goalsFor > goalsAgainst) {
    teamStats.matchesWins++
  } else if (goalsFor < goalsAgainst) {
    teamStats.matchesLosses++
  } else {
    teamStats.matchesDrawn++
  }
}