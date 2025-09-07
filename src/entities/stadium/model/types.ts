import { Country } from '@/shared/types'

export type StadiumsByCountry = {
  [key in Country]?: StadiumsData
}

export type StadiumsData = {
  [stadiumKey: string]: Stadium
}

export type Stadium = {
  id: string
  location: LocationStadium
  names: StadiumName[]
  isActive: boolean
  capacity: string
  openedYear: string
  renovatedYears: string[]
  homeTeams: string[]
}

export type StadiumName = {
  name: string
  period: string // "1930-p.t." или "1990-2005"
}

export type LocationStadium = {
  city: string
  country: Country
}
