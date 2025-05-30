import { MatchScore } from "../model/match/types";

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

  return {
    firstTeamGoals: String(score[0][0]),
    extraDataTeamGoals: ":",
    secondTeamGoals: String(score[0][1]),
  }
};
