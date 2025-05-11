import { TeamsStats } from "@/entities"

export const createNationalCompetitionTeamsStats = (): TeamsStats => {
  const nationalCompetitionTeamsStats: TeamsStats = {
    teamsStats: {
      plag: {
        appearances: [],
        matches: 0,
        resultMatches: {
          wins: 0,
          drawn: 0,
          lost: 0,
        },
        matchesByYears: {
          matchesByYears: 0,
        },
        goals: {
          goalsFor: 0,
          goalsAgainst: 0,
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
      },
    },
    totalStats: {
      matchesCount: 0,
      goalsCount: 0,
      countMatchesByYears: {},
      countGoalsByYears: {},
    },
  }

  return nationalCompetitionTeamsStats
}
