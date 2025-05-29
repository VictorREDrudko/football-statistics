export const createInitialTeamStats = (countryName: string) => ({
  countryName,
  matches: 0,
  matchesWins: 0,
  matchesDrawn: 0,
  matchesLosses: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  result: {
    champion: false,
    secondPlace: false,
    thirdPlace: false,
    fourthPlace: false,
    semiFinal: false,
    quarterFinal: false,
    round16: false,
    round32: false,
    secondGroupStage: false,
  }
})
