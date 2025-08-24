import { StadiumName, Location } from '@/entities/stadium'
import { Stage } from '@/shared/constants/tournament/types'
import { Country } from '@/shared/types'

export type MatchInfo = {
  id: string
  date: string
  stage: Stage
  teams: Country[]
  score: number[][]
  goals: GoalsInfo[]
  stadium: MatchStadiumInfo
}

export type GoalsInfo = {
  playersScoredGoal: string[]
  timeGoals: string[]
}

export type MatchStadiumInfo = {
  names: StadiumName[]
  location: Location
  attendance: string
}

export type MatchScore = {
  team1Goals: string
  extraData: string
  team2Goals: string
}
