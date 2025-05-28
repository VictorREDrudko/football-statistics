import { ConfederationCode, confederationData } from '@/entities'
import { updateTopScorers } from './utils/updateTopScorers'
import { StatsScorers, StatsTeams, TournamentStats } from './types'

export const createTournamentFinalStageStats = (confederationCode: ConfederationCode) : TournamentStats => {
  const tournamentStats: TournamentStats = {}

  Object.keys(confederationData[confederationCode].tournament).forEach((year) => {
    const statsTeams: StatsTeams = {}
    const statsScorers: StatsScorers = {}

    let matchesCount = 0
    let goalsCount = 0
    let attendanceCount = 0

    confederationData[confederationCode].tournament[year].finalStage.forEach((match) => {
      const [team1, team2] = match.teams
      const [goalsTeam1, goalsTeam2] = match.score[0]
      const [goalsTeam1et, goalsTeam2et] = match.score[1]
      const totalGoalsTeam1 = goalsTeam1 + goalsTeam1et;
      const totalGoalsTeam2 = goalsTeam2 + goalsTeam2et;
      const [goalScorerDataTeam1, goalScorerDataTeam2] = match.goals

      let matchesTeam1Count = statsTeams[team1]?.matches || 0
      let matchesTeam2Count = statsTeams[team2]?.matches || 0

      let matchesWinsTeam1Count = statsTeams[team1]?.matchesWins || 0
      let matchesDrawnTeam1Count = statsTeams[team1]?.matchesDrawn || 0
      let matchesWinsTeam2Count = statsTeams[team2]?.matchesWins || 0
      let matchesDrawnTeam2Count = statsTeams[team2]?.matchesDrawn || 0

      let goalsForTeam1Count = statsTeams[team1]?.goalsFor || 0
      let goalsAgainstTeam1Count = statsTeams[team1]?.goalsAgainst || 0
      let goalsForTeam2Count = statsTeams[team2]?.goalsFor || 0
      let goalsAgainstTeam2Count = statsTeams[team2]?.goalsAgainst || 0

      // Did the match take place?
      if (match.score[0].length > 0) {
        matchesCount++
        matchesTeam1Count++
        matchesTeam2Count++

        attendanceCount += Number(match.stadium.attendance.replace(/\s/g, ''))
        goalsCount += goalsTeam1 + goalsTeam2

        // The match ended in regular time
        if (match.score[1].length === 0) {
          goalsForTeam1Count += goalsTeam1
          goalsForTeam2Count += goalsTeam2
          goalsAgainstTeam1Count += goalsTeam2
          goalsAgainstTeam2Count += goalsTeam1

          if (goalsTeam1 > goalsTeam2) {
            matchesWinsTeam1Count++
          }

          if (goalsTeam1 < goalsTeam2) {
            matchesWinsTeam2Count++
          }

          if (goalsTeam1 === goalsTeam2) {
            matchesDrawnTeam1Count++
            matchesDrawnTeam2Count++
          }
        }

        // The match ended in extra time
        if (match.score[1].length > 0) {
          goalsForTeam1Count += totalGoalsTeam1;
          goalsAgainstTeam1Count += totalGoalsTeam2;
          goalsForTeam2Count += totalGoalsTeam2;
          goalsAgainstTeam2Count += totalGoalsTeam1;

          if (totalGoalsTeam1 > totalGoalsTeam2) {
            matchesWinsTeam1Count++
          }

          if (totalGoalsTeam1 < totalGoalsTeam2) {
            matchesWinsTeam2Count++
          }

          if (totalGoalsTeam1 === totalGoalsTeam2) {
            matchesDrawnTeam1Count++
            matchesDrawnTeam2Count++
          }
        }

        // Create players stats:
        if (goalScorerDataTeam1.playersScoredGoal.length > 0) {
          updateTopScorers(goalScorerDataTeam1, statsScorers, team1)
        }

        if (goalScorerDataTeam2.playersScoredGoal.length > 0) {
          updateTopScorers(goalScorerDataTeam2, statsScorers, team2)
        }

        if (match.score[1].length > 0) {
          goalsCount += goalsTeam1et + goalsTeam2et
        }
      }

      statsTeams[team1] = {
        countryName: team1,
        matches: matchesTeam1Count,
        matchesWins: matchesWinsTeam1Count,
        matchesDrawn: matchesDrawnTeam1Count,
        goalsFor: goalsForTeam1Count,
        goalsAgainst: goalsAgainstTeam1Count,
      }

      statsTeams[team2] = {
        countryName: team2,
        matches: matchesTeam2Count,
        matchesWins: matchesWinsTeam2Count,
        matchesDrawn: matchesDrawnTeam2Count,
        goalsFor: goalsForTeam2Count,
        goalsAgainst: goalsAgainstTeam2Count,
      }
    })

    return (
      tournamentStats[year] = {
        statsTeams: statsTeams,
        statsGeneral: {
          matches: matchesCount,
          goals: goalsCount,
          attendance: attendanceCount,
        },
        statsScorers: statsScorers,
      }
    )
  })

  return tournamentStats
}