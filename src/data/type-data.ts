// Types
export type AboutProject = {
  image: string;
  title: string;
  description: string;
  question: string;
};

export type StartPage = {
  title: string;
  text: string;
  img: string;
  historicalData: string[];
};

type ItemMenu = {
  title: string;
  path: string;
};

export type Menu = ItemMenu[];

export type Tournament = {
  id: string;
  title: string;
  iconCup: string;
  path: string;
  color: string;
  size?: string;
};

export type NameTournament =
  | "worldCup"
  | "uefa"
  | "afc"
  | "caf"
  | "concacaf"
  | "conmebol"
  | "ofc";

export type NationalTournaments = {
  [key in NameTournament]: Tournament;
};

export type Background = {
  startProject: string;
  startPage: string;
};
