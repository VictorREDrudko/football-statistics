import { v1 } from 'uuid'
import { StadiumInfo } from './types'

export class Match {
  id: string
  date: string
  stage: string
  teams: string[]
  score: number[][]
  goals: { playersScoredGoal: string[]; timeGoals: string[] }[]
  stadium: StadiumInfo
  attendance!: string

  constructor(
    date: string,
    stage: string,
    teams: string[],
    score: number[][],
    playersScoredGoal1: string[],
    timeGoals1: string[],
    playersScoredGoal2: string[],
    timeGoals2: string[],
    stadium: any,
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
      attendance: attendance,
    }
  }
}
