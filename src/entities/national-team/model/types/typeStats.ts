export type TeamsFullStats = {
  worldCupStats: TeamsStats,
  nationalCompetitionStats: TeamsStats,
}

export type TeamPartStats = {
  worldCupStats: TeamStats
  nationalCompetitionStats: TeamStats
}

export type TeamsStats = {
  teamsStats: {
    [key: string]: TeamStats
  }
  totalStats: {
    matchesCount: number
    goalsCount: number
    countMatchesByYears: CountByYears
    countGoalsByYears: CountByYears
  }
}

export type TeamStats = {
  appearances: string[]
  matches: number
  resultMatches: ResultMatches
  matchesByYears: CountByYears
  goals: ResultGoals
  placeByYears: Place
}

export type ResultMatches = {
  wins: number
  drawn: number
  lost: number
}

type CountByYears = {
  [year: string]: number
}

type ResultGoals = {
  goalsFor: number
  goalsAgainst: number
}

type Place = {
  champion: string[]
  secondPlace: string[]
  thirdPlace: string[]
  fourthPlace: string[]
  semiFinals: string[]
  quarterfinals: string[]
  roundOf16: string[]
  roundOf32: string[]
  finalGroupRound: string[]
  secondGroupRound: string[]
}
