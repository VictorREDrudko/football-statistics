export type FootballStructure = {
  internationalLevel: InternationalLevel
  continentalLevel: ContinentalLevel
  // nationalLevel: FootballLevel
}

export type OrganizationData = {
  governingBodies: GoverningBodies
  tournaments: TournamentsData
}

type InternationalLevel = {
  'FIFA': OrganizationData
}

type ContinentalLevel = {
  [key in ContinentalConfederationCode]: OrganizationData
}

type GoverningBodies = {
  code: GlobalOrganizationCode
  fullName: string
  logoPath: string
}

export type ContinentalConfederationCode =
  | 'UEFA'
  | 'CAF'
  | 'AFC'
  | 'CONMEBOL'
  | 'CONCACAF'
  | 'OFC'

export type GlobalOrganizationCode = ContinentalConfederationCode | 'FIFA'

export type TournamentsData = {
  nationalTeamLevel: TournamentData
  clubLevel: TournamentData
}

export type TournamentData = {
  [key: string]: TournamentInfo
}

export type TournamentInfo = {
  name: string
  isActive: boolean
  trophyIconPath: string
  path: string
}
