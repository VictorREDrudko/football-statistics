import { v1 } from 'uuid'
import { AssociationDate, CountryFlags, CountryNames, TeamConstructor } from './types'
import { DEFAULT_IS_COUNTRY_REAL, DEFAULT_RATING } from './constants'

export class Team {
  readonly id: string
  readonly names: CountryNames[]
  readonly associationIcon: string
  readonly flags: CountryFlags[]
  readonly coatOfArms: string
  readonly associationDate: AssociationDate
  readonly rating: {
    points: number
    place: number
  }
  readonly isCountryReal: boolean

  constructor({
    names,
    associationLogo,
    flags,
    coatOfArms,
    associationDate,
    rating = DEFAULT_RATING,
    isCountryReal = DEFAULT_IS_COUNTRY_REAL
  }: TeamConstructor) {
    this.id = v1()
    this.names = names
    this.associationIcon = associationLogo
    this.flags = flags
    this.coatOfArms = coatOfArms
    this.associationDate = associationDate
    this.rating = rating
    this.isCountryReal = isCountryReal
  }
}
