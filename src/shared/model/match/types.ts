export type Match = {
  id: string
  date: string
  stage: string
  teams: string[]
  score: number[][]
  goals: GoalsInfo[]
  stadium: StadiumInfo
}

type GoalsInfo = {
  playersScoredGoal: string[]
  timeGoals: string[]
}

export type StadiumInfo = {
  title: string
  city: string
  country: string
  attendance: string
}