import { Position } from "@xyflow/react";

export type WorldCupInfo = {
  id: string;
  title: string;
  date: string;
  icon: string;
  background: string[]
  hostCountry: string[];
  finalStage: WorldCupMatch[];
  qualification: WorldCupMatch[] | [];
};

export type WorldCupData = {
  [key in string]: WorldCupInfo;
};

export type WorldCupMatch = {
  id: string;
  date: string;
  stage: string;
  teams: string[];
  score: number[][];
  goals: GoalsInfo[];
  stadium: StadiumInfo;
};

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

export type NodesItem = {
  id: string
  type: string
  data: {
    label: string;
    match: WorldCupMatch;
  }
  position: {
    x: number;
    y: number;
  }
  sourcePosition: Position
  className: string
}