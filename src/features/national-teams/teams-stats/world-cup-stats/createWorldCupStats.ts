// переписать после перехода на FSD world cup
import { stage, worldCupData } from '@/data/worldCupData/worldCupData'
import { WorldCupMatch } from '@/data/worldCupData/type-worldCupData'
import { TeamsStats } from '@/entities'

export const createWorldCupStats = (): TeamsStats => {
  const worldCupStats: TeamsStats = {
    teamsStats: {},
    totalStats: {
      matchesCount: 0,
      goalsCount: 0,
      countMatchesByYears: {},
      countGoalsByYears: {},
    },
  }

  Object.keys(worldCupData).forEach((year: string) => {
    // Match and goal counters in the tournament
    let matchesCount = 0
    let goalsCount = 0

    worldCupData[year].finalStage.forEach((match: WorldCupMatch) => {
      const [team1, team2] = match.teams
      const [goalsTeam1, goalsTeam2] = match.score[0]
      const [goalsTeam1et, goalsTeam2et] = match.score[1]
      const [goalsTeam1p, goalsTeam2p] = match.score[2]
      const totalGoalsTeam1 = goalsTeam1 + goalsTeam1et
      const totalGoalsTeam2 = goalsTeam2 + goalsTeam2et

      // Matches (tournament match counter and the total match counter)
      matchesCount++
      worldCupStats.totalStats.matchesCount++

      // Goals (Did the match take place?)
      if (match.score[0].length > 0) {
        const goalsInMatch = goalsTeam1 + goalsTeam2

        worldCupStats.totalStats.goalsCount += goalsInMatch
        goalsCount += goalsInMatch

        if (match.score[1].length > 0) {
          const [scoreTeam1et, scoreTeam2et] = match.score[1]
          const goalsInMatchEt = scoreTeam1et + scoreTeam2et

          worldCupStats.totalStats.goalsCount += goalsInMatchEt
          goalsCount += goalsInMatchEt
        }
      }

      // initial team1 and team2
      if (!worldCupStats.teamsStats[team1]) {
        worldCupStats.teamsStats[team1] = {
          appearances: [],
          matches: 0,
          resultMatches: {
            wins: 0,
            drawn: 0,
            lost: 0,
          },
          matchesByYears: {
            [year]: 0,
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
        }
      }

      if (!worldCupStats.teamsStats[team2]) {
        worldCupStats.teamsStats[team2] = {
          appearances: [],
          matches: 0,
          resultMatches: {
            wins: 0,
            drawn: 0,
            lost: 0,
          },
          matchesByYears: {
            [year]: 0,
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
        }
      }

      // appearances
      if (!worldCupStats.teamsStats[team1].appearances.includes(year)) {
        worldCupStats.teamsStats[team1].appearances.push(year)
      }

      if (!worldCupStats.teamsStats[team2].appearances.includes(year)) {
        worldCupStats.teamsStats[team2].appearances.push(year)
      }

      // matches
      worldCupStats.teamsStats[team1].matches++
      worldCupStats.teamsStats[team1].matchesByYears[year] =
        (worldCupStats.teamsStats[team1].matchesByYears[year] || 0) + 1
      worldCupStats.teamsStats[team2].matches++
      worldCupStats.teamsStats[team2].matchesByYears[year] =
        (worldCupStats.teamsStats[team2].matchesByYears[year] || 0) + 1

      // Place
      // Final (champion / second place)
      if (match.stage === stage.final || match.stage === stage.group.finalGroup.final) {
        if (match.score[1].length === 0) {
          if (goalsTeam1 > goalsTeam2) {
            if (!worldCupStats.teamsStats[team1].placeByYears.champion.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.champion.push(year)
            }
            if (!worldCupStats.teamsStats[team2].placeByYears.secondPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.secondPlace.push(year)
            }
          }

          if (goalsTeam1 < goalsTeam2) {
            if (!worldCupStats.teamsStats[team2].placeByYears.champion.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.champion.push(year)
            }
            if (!worldCupStats.teamsStats[team1].placeByYears.secondPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.secondPlace.push(year)
            }
          }
        }

        if (match.score[1].length > 0) {
          if (totalGoalsTeam1 > totalGoalsTeam2) {
            if (!worldCupStats.teamsStats[team1].placeByYears.champion.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.champion.push(year)
            }
            if (!worldCupStats.teamsStats[team2].placeByYears.secondPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.secondPlace.push(year)
            }
          }

          if (totalGoalsTeam1 < totalGoalsTeam2) {
            if (!worldCupStats.teamsStats[team2].placeByYears.champion.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.champion.push(year)
            }
            if (!worldCupStats.teamsStats[team1].placeByYears.secondPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.secondPlace.push(year)
            }
          }

          if (totalGoalsTeam1 === totalGoalsTeam2 && goalsTeam1p > goalsTeam2p) {
            if (!worldCupStats.teamsStats[team1].placeByYears.champion.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.champion.push(year)
            }
            if (!worldCupStats.teamsStats[team2].placeByYears.secondPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.secondPlace.push(year)
            }
          }

          if (totalGoalsTeam1 === totalGoalsTeam2 && goalsTeam1p < goalsTeam2p) {
            if (!worldCupStats.teamsStats[team2].placeByYears.champion.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.champion.push(year)
            }
            if (!worldCupStats.teamsStats[team1].placeByYears.secondPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.secondPlace.push(year)
            }
          }
        }
      }

      // Third-place match (third-place / fourth-place)
      if (match.stage === stage.place3 || match.stage === stage.group.finalGroup.place3) {
        if (match.score[1].length === 0) {
          if (goalsTeam1 > goalsTeam2) {
            if (!worldCupStats.teamsStats[team1].placeByYears.thirdPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.thirdPlace.push(year)
            }
            if (!worldCupStats.teamsStats[team2].placeByYears.fourthPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.fourthPlace.push(year)
            }
          }

          if (goalsTeam1 < goalsTeam2) {
            if (!worldCupStats.teamsStats[team2].placeByYears.thirdPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.thirdPlace.push(year)
            }
            if (!worldCupStats.teamsStats[team1].placeByYears.fourthPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.fourthPlace.push(year)
            }
          }
        }

        if (match.score[1].length > 0) {
          if (totalGoalsTeam1 > totalGoalsTeam2) {
            if (!worldCupStats.teamsStats[team1].placeByYears.thirdPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.thirdPlace.push(year)
            }
            if (!worldCupStats.teamsStats[team2].placeByYears.fourthPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.fourthPlace.push(year)
            }
          }

          if (totalGoalsTeam1 < totalGoalsTeam2) {
            if (!worldCupStats.teamsStats[team2].placeByYears.thirdPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.thirdPlace.push(year)
            }
            if (!worldCupStats.teamsStats[team1].placeByYears.fourthPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.fourthPlace.push(year)
            }
          }

          if (totalGoalsTeam1 === totalGoalsTeam2 && goalsTeam1p > goalsTeam2p) {
            if (!worldCupStats.teamsStats[team1].placeByYears.thirdPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.thirdPlace.push(year)
            }
            if (!worldCupStats.teamsStats[team2].placeByYears.fourthPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.fourthPlace.push(year)
            }
          }

          if (totalGoalsTeam1 === totalGoalsTeam2 && goalsTeam1p < goalsTeam2p) {
            if (!worldCupStats.teamsStats[team2].placeByYears.thirdPlace.includes(year)) {
              worldCupStats.teamsStats[team2].placeByYears.thirdPlace.push(year)
            }
            if (!worldCupStats.teamsStats[team1].placeByYears.fourthPlace.includes(year)) {
              worldCupStats.teamsStats[team1].placeByYears.fourthPlace.push(year)
            }
          }
        }
      }

      // Semi-finals
      if (match.stage === stage[1_2]) {
        if (!worldCupStats.teamsStats[team1].placeByYears.semiFinals.includes(year)) {
          worldCupStats.teamsStats[team1].placeByYears.semiFinals.push(year)
          worldCupStats.teamsStats[team2].placeByYears.semiFinals.push(year)
        }
      }

      // Quarter-finals
      if (match.stage === stage[1_4]) {
        if (!worldCupStats.teamsStats[team1].placeByYears.quarterfinals.includes(year)) {
          worldCupStats.teamsStats[team1].placeByYears.quarterfinals.push(year)
          worldCupStats.teamsStats[team2].placeByYears.quarterfinals.push(year)
        }
      }

      // Round of 16 (1/8 finals)
      if (match.stage === stage[1_8]) {
        if (!worldCupStats.teamsStats[team1].placeByYears.roundOf16.includes(year)) {
          worldCupStats.teamsStats[team1].placeByYears.roundOf16.push(year)
          worldCupStats.teamsStats[team2].placeByYears.roundOf16.push(year)
        }
      }

      // Round of 32 (1/16 finals)
      if (match.stage === stage[1_16]) {
        if (!worldCupStats.teamsStats[team1].placeByYears.roundOf32.includes(year)) {
          worldCupStats.teamsStats[team1].placeByYears.roundOf32.push(year)
          worldCupStats.teamsStats[team2].placeByYears.roundOf32.push(year)
        }
      }

      // Final group round
      if (match.stage === stage.group.finalGroup.group) {
        if (!worldCupStats.teamsStats[team1].placeByYears.finalGroupRound.includes(year)) {
          worldCupStats.teamsStats[team1].placeByYears.finalGroupRound.push(year)
          worldCupStats.teamsStats[team2].placeByYears.finalGroupRound.push(year)
        }
      }

      // Second group round
      if (
        match.stage === stage.group.finalGroup.a ||
        match.stage === stage.group.finalGroup.b ||
        match.stage === stage.group.finalGroup.c ||
        match.stage === stage.group.finalGroup.d
      ) {
        if (!worldCupStats.teamsStats[team1].placeByYears.secondGroupRound.includes(year)) {
          worldCupStats.teamsStats[team1].placeByYears.secondGroupRound.push(year)
          worldCupStats.teamsStats[team2].placeByYears.secondGroupRound.push(year)
        }
      }

      // Goals (goals for and goals against) and result match
      // The match ended in regular time
      if (match.score[1].length === 0) {
        worldCupStats.teamsStats[team1].goals.goalsFor += goalsTeam1
        worldCupStats.teamsStats[team1].goals.goalsAgainst += goalsTeam2
        worldCupStats.teamsStats[team2].goals.goalsFor += goalsTeam2
        worldCupStats.teamsStats[team2].goals.goalsAgainst += goalsTeam1

        if (goalsTeam1 > goalsTeam2) {
          worldCupStats.teamsStats[team1].resultMatches.wins++
          worldCupStats.teamsStats[team2].resultMatches.lost++
        }

        if (goalsTeam1 < goalsTeam2) {
          worldCupStats.teamsStats[team1].resultMatches.lost++
          worldCupStats.teamsStats[team2].resultMatches.wins++
        }

        if (goalsTeam1 === goalsTeam2) {
          worldCupStats.teamsStats[team1].resultMatches.drawn++
          worldCupStats.teamsStats[team2].resultMatches.drawn++
        }
      }

      // The match ended in extra time, without penalties
      if (match.score[1].length > 0 && match.score[2].length === 0) {
        worldCupStats.teamsStats[team1].goals.goalsAgainst += totalGoalsTeam2
        worldCupStats.teamsStats[team1].goals.goalsFor += totalGoalsTeam1

        worldCupStats.teamsStats[team2].goals.goalsAgainst += totalGoalsTeam1
        worldCupStats.teamsStats[team2].goals.goalsFor += totalGoalsTeam2

        if (totalGoalsTeam1 > totalGoalsTeam2) {
          worldCupStats.teamsStats[team1].resultMatches.wins++
          worldCupStats.teamsStats[team2].resultMatches.lost++
        }

        if (totalGoalsTeam1 < totalGoalsTeam2) {
          worldCupStats.teamsStats[team1].resultMatches.lost++
          worldCupStats.teamsStats[team2].resultMatches.wins++
        }

        if (totalGoalsTeam1 === totalGoalsTeam2) {
          worldCupStats.teamsStats[team1].resultMatches.drawn++
          worldCupStats.teamsStats[team2].resultMatches.drawn++
        }
      }

      // The match ended in extra time with penalties
      if (match.score[1].length > 0 && match.score[2].length > 0) {
        const [scoreTeam1, scoreTeam2] = match.score[0]
        const [scoreTeam1et, scoreTeam2et] = match.score[1]

        const allScoreTeam1 = scoreTeam1 + scoreTeam1et
        const allScoreTeam2 = scoreTeam2 + scoreTeam2et

        worldCupStats.teamsStats[team1].goals.goalsAgainst += allScoreTeam2
        worldCupStats.teamsStats[team1].goals.goalsFor += allScoreTeam1

        worldCupStats.teamsStats[team2].goals.goalsAgainst += allScoreTeam1
        worldCupStats.teamsStats[team2].goals.goalsFor += allScoreTeam2

        worldCupStats.teamsStats[team1].resultMatches.drawn++
        worldCupStats.teamsStats[team2].resultMatches.drawn++
      }
    })

    worldCupStats.totalStats.countMatchesByYears[year] = matchesCount
    worldCupStats.totalStats.countGoalsByYears[year] = goalsCount
  })

  return worldCupStats
}
