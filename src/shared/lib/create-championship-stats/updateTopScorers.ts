import { ScorersStats } from '@/shared/model'
import { GoalsInfo } from '@/shared/model/tournament-config/class-match/types'
import { checkOGTime } from './checkOGTime'

export const updateTopScorers = (
  goalScorerData: GoalsInfo,
  players: ScorersStats,
  team: string
) => {
  // Проверяем, есть ли игрок с таким именем
  goalScorerData.playersScoredGoal.forEach(
    (newPlayer: string, index: number) => {
      const deleteOGTime = checkOGTime(goalScorerData.timeGoals[index])
      if (!deleteOGTime) return

      const existingPlayer = players.find((player) => player.name === newPlayer)

      if (existingPlayer) {
        // Если игрок есть - увеличиваем его голы
        existingPlayer.goals +=
          goalScorerData.timeGoals[index].split(',').length
      } else {
        players.push({
          name: newPlayer,
          goals: goalScorerData.timeGoals[index].split(',').length,
          country: team,
        })
      }

      return players
    }
  )
}
