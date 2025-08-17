import { TournamentData } from '@/shared'

export type ConfederationCode = 'UEFA' | 'CAF' | 'AFC' | 'CONMEBOL' | 'CONCACAF' | 'OFC' | 'WORLD'

export type ConfederationInfo = {
  id: string
  name: ConfederationCode
  nameTournament: string
  iconPathConfederation: string
  iconPathCup: string
  backgroundConfederationPath: string
  path: string
  tournament: TournamentData
}

export type ConfederationsData = Record<ConfederationCode, ConfederationInfo>

export type CountryName = {
  nameCountry: string
  period: string
}

export type CountryFlag = {
  flagCountry: string
  period: string
}

export type AssociationDate = {
  founded: string
  fifaAffiliation: string
  confederationAffiliation: string
}

// type teams groupEd by Confederations
export type TeamsByConfederation = {
  [name in ConfederationCode]: string[]
}

export type NationalTeamType = {
  id: string
  names: CountryName[]
  associationIcon: string
  flags: CountryFlag[]
  coatOfArms: string
  associationDate: AssociationDate
  rating: {
    points: number
    place: number
  }
  isCountryReal: boolean
}

export type NationalTournaments = {
  [key in ConfederationCode]: Tournament
}

export type Tournament = {
  id: string
  title: string
  iconCup: string
  path: string
  color: string
  size?: string
}

export type BaseResult = {
  title: string
  count: number
  details: string[]
  typeTotal: string
  iconPath: string
}

export type StatsResult = {
  countryName: string
  titleCompetition: string
  resultsMedal: BaseResult[]
  resultsAppearances: BaseResult
  resultsMatches: BaseResult
}
