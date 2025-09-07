import { v1 } from 'uuid'
import { Country } from '@/shared/types'
import { Stage } from '@/shared/constants'
import { GoalsInfo, MatchInfo, MatchStadiumInfo } from '../types'

export class Match implements MatchInfo {
  id: string
  date: string
  stage: Stage
  teams: Country[]
  score: number[][]
  goals: GoalsInfo[]
  stadiumInfo: MatchStadiumInfo
  attendance: string

  constructor(
    date: string,
    stage: Stage,
    teams: Country[],
    score: number[][],
    playersScoredGoal1: string[],
    timeGoals1: string[],
    playersScoredGoal2: string[],
    timeGoals2: string[],
    stadiumInfo: MatchStadiumInfo,
    attendance: string
  ) {
    this.id = v1()
    this.date = date
    this.stage = stage
    this.teams = teams
    this.score = score
    ;(this.goals = [
      { playersScoredGoal: playersScoredGoal1, timeGoals: timeGoals1 },
      { playersScoredGoal: playersScoredGoal2, timeGoals: timeGoals2 },
    ]),
      (this.stadiumInfo = stadiumInfo),
      (this.attendance = attendance)
  }
}
