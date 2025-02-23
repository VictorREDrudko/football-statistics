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

type ItemMenu = {
  title: string
  path: string
}

export type Menu = ItemMenu[]



export type Tournament = {
  id: string
  title: string
  iconCup: string
  path: string
  color: string
  size?: string
}

export type NameTournament = 'worldCup' | 'uefa' | 'afc' | 'caf' | 'concacaf' | 'conmebol' | 'ofc'

export type NationalTournaments = {
  [key in NameTournament]: Tournament
}



export type WorldCupTournament = {
  id: string
  icon: string
  hostCountry: string[]
  date: string
}

export type AllWorldCup = {
  [key in string] : WorldCupTournament
}






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



export type InfoCup = {
  appearances: number
  champions: number []
  secondPlace: number []
}

export type AchievementsType = {
  worldCup: InfoCup
  confederationsCup: InfoCup
}

export type AssociationDate = {
  founded: number
  fifaAffiliation: number | "-"
  confederationAffiliation: number
}


export type NationalTeam = {
  id: string
  name: string[]
  associationIcon: string
  confederationIcon: string
  flag: string[]
  coatOfArms: string
  confederation: string
  associationDate: AssociationDate
  rating: number
  achievements: AchievementsType
}

export type NationalTeams = {
  [name: string]: NationalTeam
}

export type TeamsConfederation = {
  [name in ConfederationType]: string[]
}

export type ConfederationType = 'afc' | 'caf' | 'concacaf' | 'conmebol' | 'ofc' | 'uefa'

