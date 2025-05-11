import { confederationData } from "./national-team/model/confederationData"
import { namesTeamByConfederation } from "./national-team/model/namesTeamByConfederation"
import { nationalTeamsData } from "./national-team/model/nationalTeamsData"
import { ConfederationCode, ConfederationInfo, CountryName, NationalTeamType } from "./national-team/model/types/types"
import { TeamPartStats, TeamsFullStats, TeamStats } from "./national-team/model/types/typeStats"
import { MiniCard } from "./national-team/ui/mini-card/miniCard"
import { NationalTeamsCard } from "./national-team/ui/nation-team-card/NationTeamCard"

export {
  nationalTeamsData, 
  namesTeamByConfederation,
  confederationData,
  MiniCard,
  NationalTeamsCard
}

export type {
  ConfederationCode,
  ConfederationInfo,
  NationalTeamType,
  CountryName,
  TeamsFullStats,
  TeamPartStats,
  TeamStats
}

