// type teams groupEd by Confederations
export type TeamsByConfederation = {
  [name in Confederation]: string[]
}

export type Confederation = 'AFC' | 'CAF' | 'CONCACAF' | 'CONMEBOL' | 'OFC' | 'UEFA' | 'FIFA'

export type Confeder = 'AFC' | 'CAF' | 'CONCACAF' | 'CONMEBOL' | 'OFC' | 'UEFA'

// type national teams
export type NationalTeams = {
  [name: string]: NationalTeam
}

export type NationalTeam = {
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

export type InfoCup = {
  appearances: number
  champions: number[]
  secondPlace: number[]
}
