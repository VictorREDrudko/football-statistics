// features/match/lib/match-data-formatters.ts
// import { MatchInfo, MatchScore, FormattedMatchData } from '@/shared/model'
// import { convertMatchScore } from '@/shared/lib/helpers/convertMatchScore'
// import { getYearFromMatchDate } from '@/entities/match/lib/getYearFromMatchDate'

// export const formatMatchData = (match: MatchInfo): FormattedMatchData => {
//   const year = getYearFromMatchDate(match.date)
//   const [team1, team2] = match.teams
//   const matchScore: MatchScore = convertMatchScore(match.score)

//   return {
//     year,
//     team1,
//     team2,
//     score: matchScore,
//     date: match.date,
//     stadiumInfo: match.stadium,
//     goalsInfo: match.goals,
//   }
// }
