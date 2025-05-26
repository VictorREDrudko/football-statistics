import { Match } from "../match/types"

export type TournamentInfo = {
  id: string
  title: string
  date: string
  icon: string
  background: string[]
  hostCountry: string[]
  finalStage: Match[]
  qualification: Match[] | []
}

export type TournamentData = {
  [key in string]: TournamentInfo
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

export type Stage = {
  final: string
  place3: string
  1_2: string
  1_4: string
  1_8: string
  1_16: string
  group: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    a: string
    b: string
    c: string
    d: string
    e: string
    f: string
    g: string
    h: string
    finalGroup: {
      group: string
      final: string
      place3: string
      a: string
      b: string
      c: string
      d: string
    }
  }
}
