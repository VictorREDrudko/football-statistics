import { ConfederationCode, confederationData } from '@/entities'
import { updateTopScorers } from './utils/updateTopScorers'
import { createInitialTeamStats } from './utils/createInitialTeamStats'
import { StatsScorers, StatsTeams, TournamentStats } from './types'
import { updateTeamStats } from './utils/updateTeamStats'
import { tournamentStages } from '../tournament-config/tournament-stages/CHAMPIONSHIP_STAGES'

export const createTournamentFinalStageStats = (
  confederationCode: ConfederationCode
): TournamentStats => {
  const tournamentStats: TournamentStats = {}

  Object.keys(confederationData[confederationCode].tournament).forEach(
    (year) => {
      const statsTeams: StatsTeams = {}
      const statsScorers: StatsScorers = []
      let matchesCount = 0
      let goalsCount = 0
      let attendanceCount = 0
      const stages: string[] = []

      confederationData[confederationCode].tournament[year].finalStage.forEach(
        (match) => {
          const [team1, team2] = match.teams
          const [goalsTeam1, goalsTeam2] = match.score[0]
          const [goalsTeam1et, goalsTeam2et] = match.score[1]
          const [goalsTeam1pen, goalsTeam2pen] = match.score[2]
          const totalGoalsTeam1 = goalsTeam1 + goalsTeam1et
          const totalGoalsTeam2 = goalsTeam2 + goalsTeam2et
          const [goalScorerDataTeam1, goalScorerDataTeam2] = match.goals

          if (!stages.includes(match.stage)) {
            stages.push(match.stage)
          }

          // Initialize team stats if not exists
          if (!statsTeams[team1]) {
            statsTeams[team1] = createInitialTeamStats(team1)
          }
          if (!statsTeams[team2]) {
            statsTeams[team2] = createInitialTeamStats(team2)
          }

          const team1Stats = statsTeams[team1]
          const team2Stats = statsTeams[team2]

          // Did the match take place?
          if (match.score[0].length > 0) {
            matchesCount++
            team1Stats.matches++
            team2Stats.matches++

            attendanceCount += Number(
              match.stadium.attendance.replace(/\s/g, '')
            )
            goalsCount += goalsTeam1 + goalsTeam2

            const isExtraTime = match.score[1].length > 0
            const finalGoalsTeam1 = isExtraTime ? totalGoalsTeam1 : goalsTeam1
            const finalGoalsTeam2 = isExtraTime ? totalGoalsTeam2 : goalsTeam2

            // Update team stats
            updateTeamStats(team1Stats, finalGoalsTeam1, finalGoalsTeam2)
            updateTeamStats(team2Stats, finalGoalsTeam2, finalGoalsTeam1)

            // Update scorers:
            if (goalScorerDataTeam1.playersScoredGoal.length > 0) {
              updateTopScorers(goalScorerDataTeam1, statsScorers, team1)
            }

            if (goalScorerDataTeam2.playersScoredGoal.length > 0) {
              updateTopScorers(goalScorerDataTeam2, statsScorers, team2)
            }

            if (isExtraTime) {
              goalsCount += goalsTeam1et + goalsTeam2et
            }
          }

          // update result
          // Final (champion / second place)
          if (
            match.stage === tournamentStages.final ||
            match.stage === tournamentStages.group.finalGroup.final
          ) {
            if (match.score[1].length === 0) {
              if (goalsTeam1 > goalsTeam2) {
                team1Stats.result.champion = true
                team2Stats.result.secondPlace = true
              }

              if (goalsTeam1 < goalsTeam2) {
                team2Stats.result.champion = true
                team1Stats.result.secondPlace = true
              }
            }

            if (match.score[1].length > 0) {
              if (totalGoalsTeam1 > totalGoalsTeam2) {
                team1Stats.result.champion = true
                team2Stats.result.secondPlace = true
              }

              if (totalGoalsTeam1 < totalGoalsTeam2) {
                team2Stats.result.champion = true
                team1Stats.result.secondPlace = true
              }

              if (
                totalGoalsTeam1 === totalGoalsTeam2 &&
                goalsTeam1pen > goalsTeam2pen
              ) {
                team1Stats.result.champion = true
                team2Stats.result.secondPlace = true
              }

              if (
                totalGoalsTeam1 === totalGoalsTeam2 &&
                goalsTeam1pen < goalsTeam2pen
              ) {
                team2Stats.result.champion = true
                team1Stats.result.secondPlace = true
              }
            }
          }

          // Third-place match (third-place / fourth-place)
          if (
            match.stage === tournamentStages.place3 ||
            match.stage === tournamentStages.group.finalGroup.place3
          ) {
            if (match.score[1].length === 0) {
              if (goalsTeam1 > goalsTeam2) {
                team1Stats.result.thirdPlace = true
                team2Stats.result.fourthPlace = true
              }

              if (goalsTeam1 < goalsTeam2) {
                team2Stats.result.thirdPlace = true
                team1Stats.result.fourthPlace = true
              }
            }

            if (match.score[1].length > 0) {
              if (totalGoalsTeam1 > totalGoalsTeam2) {
                team1Stats.result.thirdPlace = true
                team2Stats.result.fourthPlace = true
              }

              if (totalGoalsTeam1 < totalGoalsTeam2) {
                team2Stats.result.thirdPlace = true
                team1Stats.result.fourthPlace = true
              }

              if (
                totalGoalsTeam1 === totalGoalsTeam2 &&
                goalsTeam1pen > goalsTeam2pen
              ) {
                team1Stats.result.thirdPlace = true
                team2Stats.result.fourthPlace = true
              }

              if (
                totalGoalsTeam1 === totalGoalsTeam2 &&
                goalsTeam1pen < goalsTeam2pen
              ) {
                team2Stats.result.thirdPlace = true
                team1Stats.result.fourthPlace = true
              }
            }
          }

          // Semi-finals
          if (match.stage === tournamentStages[1_2]) {
            team2Stats.result.semiFinals = true
            team1Stats.result.semiFinals = true
          }

          // Quarter-finals
          if (match.stage === tournamentStages[1_4]) {
            team2Stats.result.quarterFinal = true
            team1Stats.result.quarterFinal = true
          }

          // Round of 16 (1/8 finals)
          if (match.stage === tournamentStages[1_8]) {
            team2Stats.result.round16 = true
            team1Stats.result.round16 = true
          }

          // Round of 32 (1/16 finals)
          if (match.stage === tournamentStages[1_16]) {
            team2Stats.result.round32 = true
            team1Stats.result.round32 = true
          }

          // Second group round
          if (
            match.stage === tournamentStages.group.finalGroup.a ||
            match.stage === tournamentStages.group.finalGroup.b ||
            match.stage === tournamentStages.group.finalGroup.c ||
            match.stage === tournamentStages.group.finalGroup.d
          ) {
            team2Stats.result.secondGroupStage = true
            team1Stats.result.secondGroupStage = true
          }
        }
      )

      return (tournamentStats[year] = {
        statsTeams,
        statsGeneral: {
          matches: matchesCount,
          goals: goalsCount,
          attendance: attendanceCount,
          stages: stages,
        },
        statsScorers: statsScorers.sort((a, b) => b.goals - a.goals),
      })
    }
  )

  return tournamentStats
}
