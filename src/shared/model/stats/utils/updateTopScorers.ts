import { GoalsInfo } from '../../match/types'
import { StatsScorers } from '../types'

export const updateTopScorers = (goalScorerData: GoalsInfo, players: StatsScorers, team: string) => {
  goalScorerData.playersScoredGoal.forEach((player: string, index: number) => {
    const goalsCount = players[player]?.goals || 0
    players[player] = {
      name: player,
      goals: goalsCount + goalScorerData.timeGoals[index].split(',').length,
      country: team,
    }
  })
}
