import { TeamsFullStats } from '@/entities'
import { createNationalCompetitionTeamsStats } from './national-competition-stats/createNationalCompetitionTeamsStats'
import { createWorldCupStats } from './world-cup-stats/createWorldCupStats'

export const createTeamsStats = (): TeamsFullStats => {
  const worldCupTeamsStats = createWorldCupStats()
  const nationalCompetitionTeamsStats = createNationalCompetitionTeamsStats()

  const teamStats: TeamsFullStats = {
    worldCupStats: worldCupTeamsStats,
    nationalCompetitionStats: nationalCompetitionTeamsStats,
  }

  return teamStats
}
