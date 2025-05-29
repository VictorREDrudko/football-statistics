import { ConfederationCode } from "@/entities"

export type Stats = {
  [key in ConfederationCode]: {
    [key: string]: NationalStats
  }
}

type NationalStats = {
  qualificationStats: string
  finalStageStats: TournamentStats
}

export type TournamentStats = {
  [key: string]: {
    statsTeams: StatsTeams
    statsGeneral: StatsGeneral
    statsScorers: StatsScorers
  }
}

export type StatsTeams = {
  [key: string]: StatsTeamsData
}

export type StatsTeamsData = {
  countryName: string
  matches: number
  matchesWins: number
  matchesDrawn: number
  matchesLosses: number
  goalsFor: number
  goalsAgainst: number
  result: Result
}

type StatsGeneral = {
  matches: number
  goals: number
  attendance: number
  stages: string[]
}

export type StatsScorers = {
  [key: string]: {
    name: string
    goals: number
    country: string
  }
}

type Result = {
  champion: boolean
  secondPlace: boolean
  thirdPlace: boolean
  fourthPlace: boolean
  semiFinal: boolean
  quarterFinal: boolean
  round16: boolean
  round32: boolean
  secondGroupStage: boolean
}