import { GroupTable } from "./group-table/ui/GroupTable"
import { confederationData } from "./national-team/model/confederationData"
import { namesTeamByConfederation } from "./national-team/model/namesTeamByConfederation"
import { nationalTeamsData } from "./national-team/model/nationalTeamsData"
import { ConfederationCode, ConfederationInfo, NationalTeamType } from "./national-team/model/types/types"
import { TeamPartStats, TeamsFullStats, TeamsStats, TeamStats } from "./national-team/model/types/typeStats"
import { MiniCard } from "./national-team/ui/mini-card/miniCard"
import { NationalTeamsCard } from "./national-team/ui/nation-team-card/NationTeamCard"
import { TournamentCard } from "./tournament-card/ui/TournamentCard"

export {
  nationalTeamsData, 
  namesTeamByConfederation,
  confederationData,
  MiniCard,
  NationalTeamsCard,
  TournamentCard,
  GroupTable
}

export type {
  ConfederationCode,
  ConfederationInfo,
  NationalTeamType,
  TeamsFullStats,
  TeamPartStats,
  TeamsStats,
  TeamStats,
}

