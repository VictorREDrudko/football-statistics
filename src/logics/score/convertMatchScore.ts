export type MatchScore = {
  firstTeamGoals: string
  extraDataTeamGoals: string
  secondTeamGoals: string
}

export const convertMatchScore = (score: Array<number[]>): MatchScore => {
  // The match did not take place
  if(score[0].length === 0) {
    return {
      firstTeamGoals: "",
      extraDataTeamGoals: "",
      secondTeamGoals: "",
    }
  }

  // The match went into extra time, but there were no penalties
  if (score[1].length > 0 && score[2].length === 0) {
    const goalsTeam1 = String(score[0][0] + score[1][0]);
    const goalsTeam2 = String(score[0][1] + score[1][1]);

    return {
      firstTeamGoals: goalsTeam1,
      extraDataTeamGoals: "e.t.",
      secondTeamGoals: goalsTeam2,
    }
  }

  // The match ended with a penalty shootout.
  if (score[2].length > 0) {
    const goalsTeam1 = String(score[0][0] + score[1][0]);
    const goalsTeam2 = String(score[0][1] + score[1][1]);

    return {
      firstTeamGoals: goalsTeam1,
      extraDataTeamGoals: `pen ${score[2][0]}:${score[2][1]}`,
      secondTeamGoals: goalsTeam2,
    }
  }

  // if(score.length > 3) {
  //   //  [1, 1] [0, 0] [] [1, 0] [] []
  //   if (score[4].length === 0) {
  //     return [
  //       [score[0][0] + score[1][0], score[0][1] + score[1][1]],
  //       [score[3][0], score[3][1]],
  //       [],
  //     ]
  //   }
  //   //  [1, 1] [0, 0] [] [1, 0] [2, 1] []
  //   if (score[4].length > 0 && score[5].length === 0) {
  //     return [
  //       [score[0][0] + score[1][0], score[0][1] + score[1][1]],
  //       [score[3][0], score[3][1]],
  //       [score[4][0], score[4][1]],
  //       [],
  //     ]
  //   }
  //   //  [1, 1] [0, 0] [] [1, 0] [2, 1] [5, 4]
  //   if (score[5].length > 0) {
  //     return [
  //       [score[0][0] + score[1][0], score[0][1] + score[1][1]],
  //       [score[3][0], score[3][1]],
  //       [score[4][0], score[4][1]],
  //       [score[5][0], score[5][1]],
  //     ]
  //   }
  // }

  // // вариант 1: без доп. времени и пенальти
  // if (typeof(matchScore[0]) === 'number' && score.length <= 3) {
  //   resultScore = [matchScore[0], matchScore[1]]
  // }

  // // вариант 2: доп. время (без пенальти)
  // if (Array.isArray(matchScore) && Array.isArray(matchScore[0]) && matchScore.length === 1 && score.length <= 3) {
  //   resultScore = [matchScore[0][0] + ' e.t.', matchScore[0][1]]
  // }

  // // вариант 3: пенальти (с доп. временем)
  // if (Array.isArray(matchScore) && matchScore.length === 2 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1]) && score.length <= 3) {
  //   resultScore = [matchScore[0][0] + ` (${matchScore[1][0]} p)`, matchScore[0][1] + ` (${matchScore[1][1]} p)`] 
  // }

  // // вариант 4: переигровка без доп. времени и пенальти
  // if (Array.isArray(matchScore) && matchScore.length === 3 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1]) && score.length > 3) {
  //   resultScore = [matchScore[0][0] + ` (${matchScore[1][0]})`, matchScore[0][1] + ` (${matchScore[1][1]})`] 
  // }

  // // вариант 5: переигровка c доп. временем и без пенальти
  // if (Array.isArray(matchScore) && matchScore.length === 4 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1]) && Array.isArray(matchScore[2]) && score.length > 3) {
  //   const resTeam1 = matchScore[1][0] + matchScore[2][0]
  //   const resTeam2 = matchScore[1][1] + matchScore[2][1]

  //   resultScore = [matchScore[0][0] + ` (${resTeam1} e.t.)`, matchScore[0][1] + ` (${resTeam2})`] 
  // }

  // // вариант 6: переигровка c пенальти ( и доп. временем)
  // if (Array.isArray(matchScore) && matchScore.length === 4 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1]) && Array.isArray(matchScore[2]) && Array.isArray(matchScore[3]) && score.length > 3) {
  //   const resTeam1 = matchScore[1][0] + matchScore[2][0]
  //   const resTeam2 = matchScore[1][1] + matchScore[2][1]

  //   resultScore = [matchScore[0][0] + `(${resTeam1}) ${matchScore[3][0]}p`, matchScore[0][1] + `(${resTeam2}) ${matchScore[3][1]}p`] 
  // }

  return {
    firstTeamGoals: String(score[0][0]),
    extraDataTeamGoals: ":",
    secondTeamGoals: String(score[0][1]),
  }
};
