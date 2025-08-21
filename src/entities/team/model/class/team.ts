import { v1 } from 'uuid'
import { DEFAULT_IS_COUNTRY_REAL, DEFAULT_RATING } from '../constants'
import {
  ConfederationCode,
  CountryFlag,
  CountryName,
  TeamConstructor,
  TeamDates,
} from '../types'

export class Team {
  readonly id: string
  readonly names: CountryName[]
  readonly associationLogo: string
  readonly flags: CountryFlag[]
  readonly coatOfArms: string
  readonly associationDate: TeamDates
  readonly rating: {
    points: number
    place: number
  }
  readonly isCountryReal: boolean
  readonly confederation: ConfederationCode

  constructor({
    names,
    associationIcon,
    flags,
    coatOfArms,
    teamDates,
    confederation,
    rating = DEFAULT_RATING,
    isCountryReal = DEFAULT_IS_COUNTRY_REAL,
  }: TeamConstructor) {
    this.id = v1()
    this.confederation = confederation
    this.names = names
    this.associationLogo = associationIcon
    this.flags = flags
    this.coatOfArms = coatOfArms
    this.associationDate = teamDates
    this.rating = rating
    this.isCountryReal = isCountryReal
  }
}
