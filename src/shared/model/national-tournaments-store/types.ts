import { TournamentInfo } from "../football-structure/types"
import { Country } from "../national-teams-store/teams/classTeam/types"
import { MatchInfo } from "../tournament-config/class-match/types"

export type ChampionshipInfo = {
  id: string
  title: string
  date: string
  logo: ChampionshipLogo
  background: ChampionshipBackground
  hostCountry: Country[]
  finalStage: MatchInfo[]
  qualification: MatchInfo[]
  info: TournamentInfo
}

export type ChampionshipBackground = {
  groupRound: string
  knockoutRound: string
}

type ChampionshipLogo = {
  forCard: string
  withoutBackground: string
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
