export type BaseRatingPoints = {
  worldCup: BaseTournamentPoints
}

type BaseTournamentPoints = {
  appearances: number
  winsMatches:number
  drawnMatches:number
  champion: number
  secondPlace: number
  thirdPlace: number
  fourthPlace: number
  semiFinals: number
  quarterfinals: number
  roundOf16: number
  roundOf32: number
  finalGroupRound: number
  secondGroupRound: number
}