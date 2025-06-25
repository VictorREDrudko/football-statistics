import { Country } from "../national-teams-store/teams/classTeam/types"
import { MatchInfo } from "../tournament-config/class-match/types"

export type TournamentInfo = {
  id: string
  title: string
  date: string
  logo: string
  background: string[]
  hostCountry: Country[]
  finalStage: MatchInfo[]
  qualification: MatchInfo[]
}

export type TournamentData = {
  [key in string]: TournamentInfo
}

export type NationalTournaments = {
  worldCup: TournamentData
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
