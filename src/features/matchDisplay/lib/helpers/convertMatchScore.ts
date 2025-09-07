import { MatchScore } from '@/entities/match'

export const convertMatchScore = (score: number[][]): MatchScore => {
  const [goalsTeam1, goalsTeam2] = score[0]
  const [goalsTeam1et, goalsTeam2et] = score[1]
  const [goalsTeam1pen, goalsTeam2pen] = score[2]

  const isExtraTime = score[1].length > 0
  const isPenalty = score[2].length > 0

  const resultScore: MatchScore = {
    team1Goals: goalsTeam1,
    extraData: ':',
    team2Goals: goalsTeam2,
  }

  if (isExtraTime) {
    resultScore.extraData = isPenalty
      ? `pen ${goalsTeam1pen}:${goalsTeam2pen}`
      : `e.t. ${goalsTeam1et}:${goalsTeam2et}`
  }

  return resultScore
}
