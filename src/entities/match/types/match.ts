import { Stage } from '@/shared/constants/tournament/types'

export type MatchInfo = {
  id: string
  date: string
  stage: Stage
  teams: string[]
  score: number[][]
  goals: GoalsInfo[]
  stadium: StadiumInfo
}

export type GoalsInfo = {
  playersScoredGoal: string[]
  timeGoals: string[]
}

export type StadiumInfo = {
  names: NamesStadium[]
  location: LocationStadium
  attendance: string
}

export type MatchScore = {
  team1Goals: string
  extraData: string
  team2Goals: string
}
