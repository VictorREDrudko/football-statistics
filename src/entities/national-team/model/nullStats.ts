import { TeamStats } from "./types/typeStats";

export const nullStats: TeamStats = {
    appearances: [],
    matches: 0,
    resultMatches: {
      wins: 0,
      drawn: 0,
      lost: 0,
    },
    matchesByYears: {},
    goals: {
      goalsFor: 0,
      goalsAgainst: 0
    },
    placeByYears: {
      champion: [],
      secondPlace: [],
      thirdPlace: [],
      fourthPlace: [],
      semiFinals: [],
      quarterfinals: [],
      roundOf16: [],
      roundOf32: [],
      finalGroupRound: [],
      secondGroupRound: [],
    },
  }