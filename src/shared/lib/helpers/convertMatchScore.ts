import { MatchScore } from '../../model/match/types'

export const convertMatchScore = (score: Array<number[]>): MatchScore => {
  const [goalsTeam1, goalsTeam2] = score[0]
  const isMatch = score[0].length > 0
  const [goalsTeam1et, goalsTeam2et] = score[1]
  const isExtraTime = score[1].length > 0
  const [goalsTeam1pen, goalsTeam2pen] = score[2]
  const isPenalty = score[2].length > 0
  const totalGoalsTeam1 = goalsTeam1 + goalsTeam1et
  const totalGoalsTeam2 = goalsTeam2 + goalsTeam2et

  const resultScore = {
    team1Goals: '',
    extraData: '',
    team2Goals: '',
  }

  if (isMatch && !isExtraTime) {
    resultScore.team1Goals = goalsTeam1.toString()
    resultScore.extraData = ':'
    resultScore.team2Goals = goalsTeam2.toString()

    return resultScore
  }

  // The match went into extra time, but there were no penalties
  if (isExtraTime) {
    resultScore.team1Goals = totalGoalsTeam1.toString()
    resultScore.extraData = isPenalty ? `pen ${goalsTeam1pen}:${goalsTeam2pen}` :'e.t.'
    resultScore.team2Goals = totalGoalsTeam2.toString()

    return resultScore
  }

  return resultScore
}
