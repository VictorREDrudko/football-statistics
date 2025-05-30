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