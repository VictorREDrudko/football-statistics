import { GoalsDetails } from '@/entities/match'
import { GoalsInfo } from '../../../model'
import { formattedGoalTimes } from './formattedGoalTimes'

export const formattedGoalsInfo = (goals: GoalsInfo[]): GoalsDetails => {
  const goalsDetails = goals.map((goalsInfoTeam) => {
    return goalsInfoTeam.playersScoredGoal.map((player, index) => {
      return {
        player,
        minutes: formattedGoalTimes(goalsInfoTeam.timeGoals[index]),
      }
    })
  })

  const [goalsTeam1, goalsTeam2] = goalsDetails

  return {
    goalsTeam1,
    goalsTeam2,
  }
}
