export type ConfederationCode =
  | 'UEFA'
  | 'CAF'
  | 'AFC'
  | 'CONMEBOL'
  | 'CONCACAF'
  | 'OFC'

export type GlobalGoverningBodyCode = 'FIFA'

export type FootballOrganizationCode =
  | GlobalGoverningBodyCode
  | ConfederationCode
