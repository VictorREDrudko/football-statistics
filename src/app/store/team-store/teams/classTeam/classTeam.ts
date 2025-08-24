import { v1 } from 'uuid'
import { AssociationDate, ConfederationCode, CountryFlags, CountryNames, TeamConstructor } from './types'
import { DEFAULT_IS_COUNTRY_REAL, DEFAULT_RATING } from './constants'

export class Team {
  readonly id: string
  readonly names: CountryNames[]
  readonly associationLogo: string
  readonly flags: CountryFlags[]
  readonly coatOfArms: string
  readonly associationDate: AssociationDate
  readonly rating: {
    points: number
    place: number
  }
  readonly isCountryReal: boolean
  readonly confederation: ConfederationCode

  constructor({
    names,
    associationLogo,
    flags,
    coatOfArms,
    associationDate,
    confederation,
    rating = DEFAULT_RATING,
    isCountryReal = DEFAULT_IS_COUNTRY_REAL,
  }: TeamConstructor) {
    this.id = v1()
    this.confederation = confederation
    this.names = names
    this.associationLogo = associationLogo
    this.flags = flags
    this.coatOfArms = coatOfArms
    this.associationDate = associationDate
    this.rating = rating
    this.isCountryReal = isCountryReal
  }
}