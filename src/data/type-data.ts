// Types
export type AboutProject = {
  image: string,
  title: string
  description: string,
  question: string
}

export type StartPage = {
  title: string
  text: string
  img: string
  historicalData: string[]
}

export type Menu = string[]







type ImageFifaWorldCup = {
  background: string
  background2: string
  logo: string
  ball: string
}

export type StatisticWorldCup = {
  hostCountry: string
  teamsInFinalStage: number
  teamsInQualification: number
  matches: number
  goals: number
  goalsPerMatch: number
  topScorer: string
  topScorerGoals: number
}

export type Goals = {
  playersScoredGoal: string[]
  timeGoals: string[] 
}

type Stadium = {
  title: string
  city: string
  country: string
  attendance: string
}

export type MatchFifaWorldCup = {
  id: string
  date: string
  stage: string
  teams: string[]
  score: number[][]
  goals: Goals[]
  stadium: Stadium
}

export type InfoFifaWorldCup = {
  title: string
  dates: string
  peculiarities: string[]
}

export type FifaWorldCup = {
  image: ImageFifaWorldCup
  statistic: StatisticWorldCup
  info: InfoFifaWorldCup
  qualification: MatchFifaWorldCup[] | 'Not qualification'
  finalStage: MatchFifaWorldCup[]
}

export type DataFifaWorldCup = {
  [key: string] : FifaWorldCup
}
