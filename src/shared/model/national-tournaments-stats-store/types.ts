export type NationalTournamentsStats = {
  'world-cup': TournamentStats
}

export type TournamentStats = {
  [key in string]: ChampionshipStats
}

export type ChampionshipStats = {
  qualificationStats: string
  finalStageStats: ChampionshipfinalStageStats
}

export type ChampionshipfinalStageStats = {
  teamsStats: TeamsStats
  scorersStats: ScorersStats
  matches: number
  goals: number
  attendance: number
}

export type TeamsStats = {
  [key: string]: TeamsStatsData
}


export type TeamsStatsData = {
  countryName: string
  matches: number
  matchesWins: number
  matchesDrawn: number
  matchesLosses: number
  goalsFor: number
  goalsAgainst: number
  result: Result
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

export type ScorersStats = ScorerStats[]

type ScorerStats = {
  name: string
  goals: number
  country: string
}


