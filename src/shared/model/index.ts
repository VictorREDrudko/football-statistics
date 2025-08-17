import { footballStructure } from './football-structure/footballStructure'
import {
  ContinentalConfederationCode,
  GlobalOrganizationCode,
  TournamentData,
  TournamentsData,
} from './football-structure/types'
import { OrganizationData } from './football-structure/types'
import { nationalTournamentStore } from './national-tournaments-store/nationalTournamentStore'
import { ChampionshipInfo, NationalTournaments } from './national-tournaments-store/types'

export { footballStructure, nationalTournamentStore }

export type {
  ContinentalConfederationCode,
  OrganizationData,
  GlobalOrganizationCode,
  TournamentsData,
  TournamentData,
  NationalTournaments,
  ChampionshipInfo
}
