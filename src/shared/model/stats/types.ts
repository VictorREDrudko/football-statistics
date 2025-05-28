import { ConfederationCode } from "@/entities"

export type Stats = {
  [key in ConfederationCode]: NationalStats
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
  [key: string]: {
    countryName: string
    matches: number
    matchesWins: number
    matchesDrawn: number
    goalsFor: number
    goalsAgainst: number
  }
}

type StatsGeneral = {
  matches: number
  goals: number
  attendance: number
}

export type StatsScorers = {
  [key: string]: {
    name: string
    goals: number
    country: string
  }
}