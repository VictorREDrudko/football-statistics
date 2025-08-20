import { ScorersStats } from '@/shared/model'

export type FinalPositions = {
  champions: string
  runnersUp: string
  thirdPlace: string
  fourthPlace: string
}

export type ChampionshipStatsData = {
  hostCountries: string[]
  dates: string
  finalPositions: FinalPositions
  teams: number
  matches: number
  goals: number
  goalsPerMatch: number
  attendance: string
  attendancePerMatch: string
  scorers: ScorersStats
  teamsQualification: number
}
