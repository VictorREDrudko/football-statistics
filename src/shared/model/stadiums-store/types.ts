import { Country } from '../national-teams-store/teams/classTeam/types'

export type Stadiums = {
  [countryKey in Country]: CountryStadiums
}

export type CountryStadiums = {
  country: Country
  stadiums: StadiumsData
}

type StadiumsData = {
  [stadiumKey: string]: Stadium
}

type Stadium = {
  titles: TitlesStadium[]
  isActive: boolean
  city: string
  capacity: string
  builtYear: string[]
  homeTeam: string[]
  imageUrl: string
}

export type TitlesStadium = {
  title: string
  period: string
}
