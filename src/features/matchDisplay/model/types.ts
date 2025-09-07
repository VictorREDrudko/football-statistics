import { Stage } from '@/shared/constants'
import { Country } from '@/shared/types'

export type MatchInfo = {
  id: string
  date: string
  stage: Stage
  teams: Country[]
  score: number[][]
  goals: GoalsInfo[]
  stadiumInfo: MatchStadiumInfo
  attendance: string
}

export type GoalsInfo = {
  playersScoredGoal: string[]
  timeGoals: string[]
}

export type MatchStadiumInfo = {
  country: Country
  stadiumKey: string
}
