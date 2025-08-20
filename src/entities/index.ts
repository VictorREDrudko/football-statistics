import { AboutContent } from './about/ui/AboutContent'
import { GroupTable } from './group-table/ui/GroupTable'
import { confederationData } from './national-team/model/confederationData'
import { namesTeamByConfederation } from './national-team/model/namesTeamByConfederation'
import { nationalTeamsData } from './national-team/model/nationalTeamsData'
import {
  ConfederationCode,
  ConfederationInfo,
  NationalTeamType,
} from './national-team/model/types/types'
import {
  TeamPartStats,
  TeamsFullStats,
} from './national-team/model/types/typeStats'
import { MiniCard } from './national-team/ui/mini-card/miniCard'
import { NationalTeamsCard } from './national-team/ui/nation-team-card/NationTeamCard'
import { History } from './history-football/ui/History'
import { OrganizationFootballLevel } from './organization-football-level/ui/OrganizationFootballLevel'
import { ChampionshipCard } from './championship-card/ui/ChampionshipCard'
import { Match } from './match/Match'
import { CountryTeam } from './countryTeam/ui/CountryTeam'
import { Flag } from './countryTeam/ui/flag/Flag'
import { ChampionshipParameter } from './championship-parameter/ChampionshipParameter'

export {
  AboutContent,
  nationalTeamsData,
  namesTeamByConfederation,
  confederationData,
  MiniCard,
  NationalTeamsCard,
  ChampionshipCard,
  GroupTable,
  History,
  OrganizationFootballLevel,
  Match,
  CountryTeam,
  Flag,
  ChampionshipParameter
}

export type {
  ConfederationCode,
  ConfederationInfo,
  NationalTeamType,
  TeamsFullStats,
  TeamPartStats,
}
