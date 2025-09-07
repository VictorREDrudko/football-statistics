import { Stage } from '@/shared/constants'
import { Country } from '@/shared/types'

export type MatchMode = 'partial' | 'full'

export type FormattedMatchData = {
  matchBasicInfo: MatchBasicInfo
  matchAdditionalInfo: MatchAdditionalInfo
  matchStadiumInfo: MatchStadiumBasicInfo
}

export type MatchBasicInfo = {
  teams: string[]
  flags: string[]
  isRealTeams: boolean[]
  score: MatchScore
}

export type MatchAdditionalInfo = {
  date: string
  stage: Stage
  goals: GoalsDetails
}

export type MatchStadiumBasicInfo = {
  name: string
  country: Country
  city: string
  attendance: string
}

export type GoalsDetails = {
  goalsTeam1: GoalDetails[]
  goalsTeam2: GoalDetails[]
}

export type GoalDetails = {
  player: string
  minutes: string
}

export type MatchScore = {
  team1Goals: number
  extraData: string
  team2Goals: number
}
