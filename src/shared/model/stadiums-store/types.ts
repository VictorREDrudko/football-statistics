import { Country } from '../national-teams-store/teams/classTeam/types'

export type Stadiums = {
  [countryKey in Country]: StadiumsData
}

export type StadiumsData = {
  [stadiumKey: string]: StadiumType
}

type StadiumType = {
  id: string
  locationAndNames: LocationAndNamesStadium
  isActive: boolean
  capacity: string
  openedYear: string
  renovated: string[]
  homeTeam: string[]
  imageUrl: string[]
}

export type LocationAndNamesStadium = {
  names: NamesStadium[]
  location: LocationStadium
}

export type NamesStadium = {
  name: string
  period: string
}

type LocationStadium = {
  city: string
  country: Country
}
