import { DEFAULT_IS_COUNTRY_REAL, DEFAULT_RATING } from '@/entities/team/model/constants'
import { v1 } from 'uuid'
import { AssociationDate, CountryFlag, CountryName } from './types/types'

export class NationalTeam {
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

  constructor({
    names,
    associationIcon,
    flags,
    coatOfArms,
    associationDate,
    rating,
    isCountryReal = DEFAULT_IS_COUNTRY_REAL,
  }: Partial<Omit<NationalTeam, 'id'>>) {
    this.id = v1()
    this.names = names!
    this.associationIcon = associationIcon!
    this.flags = flags!
    this.coatOfArms = coatOfArms!
    this.associationDate = associationDate!
    this.rating = rating ? { ...rating } : { ...DEFAULT_RATING }
    this.isCountryReal = isCountryReal
  }
}
