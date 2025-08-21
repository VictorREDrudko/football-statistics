import { Country } from '@/shared/types/country'
import { ConfederationCode } from './footballOrganizationCode'

export type TeamConstructor = {
  id?: string
  confederation: ConfederationCode
  names: CountryName[]
  associationIcon: string
  flags: CountryFlag[]
  coatOfArms: string
  teamDates: TeamDates
  rating?: {
    points: number
    place: number
  }
  isCountryReal?: boolean
}

export type CountryName = {
  name: Country
  period: string
}

export type CountryFlag = {
  flagPath: string
  period: string
}

export type TeamDates = {
  founded: string
  fifa: string
  confederationDate: string
}

// export type ConfederationInfo = {
//   id: string
//   name: ConfederationCode
//   nameTournament: string
//   iconPathConfederation: string
//   iconPathCup: string
//   backgroundConfederationPath: string
//   path: string
//   tournament: TournamentData
// }

// export type ConfederationsData = Record<ConfederationCode, ConfederationInfo>

// // type teams groupEd by Confederations
// export type TeamsByConfederation = {
//   [name in ConfederationCode]: string[]
// }

// export type NationalTournaments = {
//   [key in ConfederationCode]: Tournament
// }

// export type Tournament = {
//   id: string
//   title: string
//   iconCup: string
//   path: string
//   color: string
//   size?: string
// }

// export type BaseResult = {
//   title: string
//   count: number
//   details: string[]
//   typeTotal: string
//   iconPath: string
// }

// export type StatsResult = {
//   countryName: string
//   titleCompetition: string
//   resultsMedal: BaseResult[]
//   resultsAppearances: BaseResult
//   resultsMatches: BaseResult
// }
