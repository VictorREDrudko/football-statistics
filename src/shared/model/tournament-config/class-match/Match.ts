import { v1 } from 'uuid'
import { GoalsInfo, MatchInfo, StadiumInfo } from './types'

export class Match implements MatchInfo {
  id: string
  date: string
  stage: string
  teams: string[]
  score: number[][]
  goals: GoalsInfo[]
  stadium: StadiumInfo

  constructor(
    date: string,
    stage: string,
    teams: string[],
    score: number[][],
    playersScoredGoal1: string[],
    timeGoals1: string[],
    playersScoredGoal2: string[],
    timeGoals2: string[],
    stadium: StadiumInfo,
    attendance: string
  ) {
    this.id = v1()
    this.date = date
    this.stage = stage
    this.teams = teams
    this.score = score
    this.goals = [
      { playersScoredGoal: playersScoredGoal1, timeGoals: timeGoals1 },
      { playersScoredGoal: playersScoredGoal2, timeGoals: timeGoals2 },
    ]
    this.stadium = {
      ...stadium,
      attendance,
    }
  }
}
