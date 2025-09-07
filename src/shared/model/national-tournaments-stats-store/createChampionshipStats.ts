
// import { ChampionshipfinalStageStats } from './types'
// import { initialTeamStats, updateTeamStats } from '@/shared/lib'
// import { updateTopScorers } from '../stats/utils/updateTopScorers'


// export const createChampionshipStats = (
//   championshipMatches: MatchInfo[]
// ): ChampionshipfinalStageStats => {
//   const championshipStats: ChampionshipfinalStageStats = {
//     teamsStats: {},
//     scorersStats: [],
//     matches: 0,
//     goals: 0,
//     attendance: 0,
//   }

//   championshipMatches.forEach((match) => {
//     const [team1, team2] = match.teams
//     const [goalsTeam1, goalsTeam2] = match.score[0]
//     const [goalsTeam1et, goalsTeam2et] = match.score[1]
//     const [goalsTeam1pen, goalsTeam2pen] = match.score[2]
//     const totalGoalsTeam1 = goalsTeam1 + goalsTeam1et
//     const totalGoalsTeam2 = goalsTeam2 + goalsTeam2et
//     const [goalScorerDataTeam1, goalScorerDataTeam2] = match.goals

//     if (!championshipStats.teamsStats[team1]) {
//       championshipStats.teamsStats[team1] = initialTeamStats(team1)
//     }
//     if (!championshipStats.teamsStats[team2]) {
//       championshipStats.teamsStats[team2] = initialTeamStats(team2)
//     }

//     const team1Stats = championshipStats.teamsStats[team1]
//     const team2Stats = championshipStats.teamsStats[team2]

//     // Did the match take place?
//     if (match.score[0].length > 0) {
//       championshipStats.matches++
//       team1Stats.matches++
//       team2Stats.matches++

//       championshipStats.attendance += Number(
//         match.stadium.attendance.replace(/\s/g, '')
//       )

//       championshipStats.goals += goalsTeam1 + goalsTeam2

//       const isExtraTime = match.score[1].length > 0
//       const finalGoalsTeam1 = isExtraTime ? totalGoalsTeam1 : goalsTeam1
//       const finalGoalsTeam2 = isExtraTime ? totalGoalsTeam2 : goalsTeam2

//       // Update team stats
//       updateTeamStats(team1Stats, finalGoalsTeam1, finalGoalsTeam2)
//       updateTeamStats(team2Stats, finalGoalsTeam2, finalGoalsTeam1)

//       // Update scorers:
//       if (goalScorerDataTeam1.playersScoredGoal.length > 0) {
//         updateTopScorers(
//           goalScorerDataTeam1,
//           championshipStats.scorersStats,
//           team1
//         )
//       }

//       if (goalScorerDataTeam2.playersScoredGoal.length > 0) {
//         updateTopScorers(
//           goalScorerDataTeam2,
//           championshipStats.scorersStats,
//           team2
//         )
//       }

//       if (isExtraTime) {
//         championshipStats.goals += goalsTeam1et + goalsTeam2et
//       }
//     }

//     // update result
//     // Final (champion / second place)
//     if (
//       match.stage === tournamentStages.final ||
//       match.stage === tournamentStages.finalGroupRound
//     ) {
//       if (match.score[1].length === 0) {
//         if (goalsTeam1 > goalsTeam2) {
//           team1Stats.result.champion = true
//           team2Stats.result.secondPlace = true
//         }

//         if (goalsTeam1 < goalsTeam2) {
//           team2Stats.result.champion = true
//           team1Stats.result.secondPlace = true
//         }
//       }

//       if (match.score[1].length > 0) {
//         if (totalGoalsTeam1 > totalGoalsTeam2) {
//           team1Stats.result.champion = true
//           team2Stats.result.secondPlace = true
//         }

//         if (totalGoalsTeam1 < totalGoalsTeam2) {
//           team2Stats.result.champion = true
//           team1Stats.result.secondPlace = true
//         }

//         if (
//           totalGoalsTeam1 === totalGoalsTeam2 &&
//           goalsTeam1pen > goalsTeam2pen
//         ) {
//           team1Stats.result.champion = true
//           team2Stats.result.secondPlace = true
//         }

//         if (
//           totalGoalsTeam1 === totalGoalsTeam2 &&
//           goalsTeam1pen < goalsTeam2pen
//         ) {
//           team2Stats.result.champion = true
//           team1Stats.result.secondPlace = true
//         }
//       }
//     }

//     // Third-place match (third-place / fourth-place)
//     if (
//       match.stage === tournamentStages.thirdPlace ||
//       match.stage === tournamentStages.thirdPlaceGroupRound
//     ) {
//       if (match.score[1].length === 0) {
//         if (goalsTeam1 > goalsTeam2) {
//           team1Stats.result.thirdPlace = true
//           team2Stats.result.fourthPlace = true
//         }

//         if (goalsTeam1 < goalsTeam2) {
//           team2Stats.result.thirdPlace = true
//           team1Stats.result.fourthPlace = true
//         }
//       }

//       if (match.score[1].length > 0) {
//         if (totalGoalsTeam1 > totalGoalsTeam2) {
//           team1Stats.result.thirdPlace = true
//           team2Stats.result.fourthPlace = true
//         }

//         if (totalGoalsTeam1 < totalGoalsTeam2) {
//           team2Stats.result.thirdPlace = true
//           team1Stats.result.fourthPlace = true
//         }

//         if (
//           totalGoalsTeam1 === totalGoalsTeam2 &&
//           goalsTeam1pen > goalsTeam2pen
//         ) {
//           team1Stats.result.thirdPlace = true
//           team2Stats.result.fourthPlace = true
//         }

//         if (
//           totalGoalsTeam1 === totalGoalsTeam2 &&
//           goalsTeam1pen < goalsTeam2pen
//         ) {
//           team2Stats.result.thirdPlace = true
//           team1Stats.result.fourthPlace = true
//         }
//       }
//     }

//     // Semi-finals
//     if (match.stage === tournamentStages.semiFinal) {
//       team2Stats.result.semiFinal = true
//       team1Stats.result.semiFinal = true
//     }

//     // Quarter-finals
//     if (match.stage === tournamentStages.quarterFinal) {
//       team2Stats.result.quarterFinal = true
//       team1Stats.result.quarterFinal = true
//     }

//     // Round of 16 (1/8 finals)
//     if (match.stage === tournamentStages.roundOf16) {
//       team2Stats.result.round16 = true
//       team1Stats.result.round16 = true
//     }

//     // Round of 32 (1/16 finals)
//     if (match.stage === tournamentStages.roundOf32) {
//       team2Stats.result.round32 = true
//       team1Stats.result.round32 = true
//     }

//     // Second group round
//     if (
//       match.stage === tournamentStages.secondGroupRoundA ||
//       match.stage === tournamentStages.secondGroupRoundB ||
//       match.stage === tournamentStages.secondGroupRoundC ||
//       match.stage === tournamentStages.secondGroupRoundD
//     ) {
//       team2Stats.result.secondGroupStage = true
//       team1Stats.result.secondGroupStage = true
//     }
//   })

//   championshipStats.scorersStats.sort((a, b) => b.goals - a.goals)

//   return championshipStats
// }
