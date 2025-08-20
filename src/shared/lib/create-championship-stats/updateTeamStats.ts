import { TeamsStatsData } from '../../model/national-tournaments-stats-store/types'

export const updateTeamStats = (
  teamStats: TeamsStatsData,
  goalsFor: number,
  goalsAgainst: number
) => {
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
