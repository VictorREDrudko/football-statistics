import { MatchInfo } from "@/shared"
import { Position } from "@xyflow/react"

export type FinalPositions = {
  champions: string
  runnersUp: string
  thirdPlace: string
  fourthPlace: string
}

export type TableData = {
  [key: string]: TeamTableData
}

export type TeamTableData = {
  position: number
  team: string,
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalsDifference: number
  points: number
  qualification: "" | "+",
  pointsByDate: boolean
};

export type NodeType = {
  id: string
  type: string
  data: {
    label: string
    match: MatchInfo
  }
  position: {
    x: number
    y: number
  }
  sourcePosition: Position
  className: string
}