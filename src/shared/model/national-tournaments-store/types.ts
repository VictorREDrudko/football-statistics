import { TournamentInfo } from "../football-structure/types"
import { Country } from "../national-teams-store/teams/classTeam/types"
import { MatchInfo } from "../tournament-config/class-match/types"

export type ChampionshipInfo = {
  id: string
  title: string
  date: string
  logo: ChampionshipLogo
  background: string[]
  hostCountry: Country[]
  finalStage: MatchInfo[]
  qualification: MatchInfo[]
  info: TournamentInfo
}

type ChampionshipLogo = {
  forCard: string
  origin: string
}

export type TournamentData = {
  [key in string]: ChampionshipInfo
}

export type NationalTournaments = {
  'world-cup': TournamentData
}

// export type NodesItem = {
//   id: string
//   type: string
//   data: {
//     label: string
//     match: WorldCupMatch
//   }
//   position: {
//     x: number
//     y: number
//   }
//   sourcePosition: Position
//   className: string
// }
