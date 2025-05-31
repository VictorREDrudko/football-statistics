export type GoalsInfo = {
  playersScoredGoal: string[];
  timeGoals: string[];
};

export type StadiumInfo = {
  title: string;
  city: string;
  country: string;
  attendance: string;
};

export type MatchInfo = {
  id: string;
  date: string;
  stage: string;
  teams: string[];
  score: number[][];
  goals: GoalsInfo[];
  stadium: StadiumInfo;
};

export type MatchScore = {
  team1Goals: string
  extraData: string
  team2Goals: string
}