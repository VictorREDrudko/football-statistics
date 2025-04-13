import {
  AboutProject,
  Background,
  Menu,
  NameTournament,
  NationalTournaments,
  StartPage,
} from "./type-data";

import backgroundFootballLive from "./../assets/football-live.png";
import logoProject from "./../assets/logo.png";
import backgroundStartPage from "./../assets/background-football.png";
import ratingIcon from "./../assets/icon/rating-icon.png";
import projectIcon from "./../assets/icon/project-icon.png";
import pitchImg from "./../assets/pitch.png";

import iconCup from "./../assets/icon/icon-cup.png";

import iconWorldCup from "./../assets/icon-cup/world.png";
import iconuefaCup from "./../assets/icon-cup/uefa.png";
import iconcafcup from "./../assets/icon-cup/caf.png";
import iconafcCup from "./../assets/icon-cup/afc.png";
import iconConmebolCup from "./../assets/icon-cup/conmebol.png";
import iconconcacafcup from "./../assets/icon-cup/concacaf.png";
import iconofcCup from "./../assets/icon-cup/ofc.png";

import iconMedal from "./../assets/icon/icon-medal.png";
import {
  CountryFlag,
  CountryName,
} from "./nationalTeamsData/type-nationalTeams";

// DATA
export const aboutProject: AboutProject = {
  image: logoProject,
  title: "football is life",
  description: "This project is about football",
  question: "Do you love football as much as I do?..",
};

export const startPage: StartPage = {
  title: "association football",
  text: "Association football (or football / soccer) is a team sport played between two teams of 11 players each. The objective of the game is to score more goals than the opposing team. With an estimated 250 million players active in over 200 countries and territories, it is the world's most popular sport.",
  img: pitchImg,
  historicalData: [
    "1848 The Cambridge football rules",
    "1850s many clubs were created",
    "1857 codes of rules Sheffield Football Club",
    "1863 the first set of rules of The Football Association",
    "1872 The first official international football match and create oldest football competition is the Football Association Cup",
    "1888 was formed the first Football League",
    "1904 was formed FIFA",
    "1930 The first FIFA World Cup",
  ],
};

export const menu: Menu = [
  { title: "About", path: "about" },
  { title: "National tournaments", path: "national-tournaments" },
  { title: "Club tournaments", path: "club-tournaments" },
  { title: "National teams", path: "teams" },
  { title: "Clubs", path: "clubs" },
];

export const icons = {
  project: projectIcon,
  raiting: ratingIcon,
  confederation: {
    // uefa: iconuefa,
    // caf: iconcaf,
    // afc: iconafc,
  },
  trophy: {
    cup: iconCup,
    medal: iconMedal,
  },
};

export const countWorldCup = 0;
export const uefaCup = 0;

export const background: Background = {
  startProject: backgroundFootballLive,
  startPage: backgroundStartPage,
};

export const nationalTournaments: NationalTournaments = {
  concacaf: {
    id: "5-concacaf",
    title: "concacaf Gold Cup",
    iconCup: iconconcacafcup,
    path: "concacaf-cup",
    color: "#300010",
  },
  conmebol: {
    id: "6-conmebol",
    title: "CONMEBOL Copa América",
    iconCup: iconConmebolCup,
    path: "conmebol-cup",
    color: "#292600",
  },
  ofc: {
    id: "7-ofc",
    title: "ofc Nations Cup",
    iconCup: iconofcCup,
    path: "ofc-cup",
    color: "#5E2A00",
  },
  worldCup: {
    id: "1-worldCup",
    title: "FIFA World Cup",
    iconCup: iconWorldCup,
    path: "world-cup",
    color: "#5F5C1C",
    size: "190px",
  },
  uefa: {
    id: "2-uefa",
    title: "European Championship",
    iconCup: iconuefaCup,
    path: "uefa-cup",
    color: "#002645",
  },
  afc: {
    id: "3-afc",
    title: "afc Asian Cup",
    iconCup: iconafcCup,
    path: "afc-cup",
    color: "#2C003D",
  },
  caf: {
    id: "4-caf",
    title: "Africa Cup of Nations",
    iconCup: iconcafcup,
    path: "caf-cup",
    color: "#012B00",
  },
};

export const nationalTournamentsKeys: NameTournament[] = Object.keys(
  nationalTournaments
) as NameTournament[];

export const tournamentsWorldCup: number[] = [
  1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 1978, 1982, 1986,
  1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022,
];
