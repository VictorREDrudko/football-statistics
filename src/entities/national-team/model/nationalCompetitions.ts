import { NationalTournaments } from "./types/types";
import iconConcacafCup from "./../assets/icon-cup/concacaf.png";
import iconConmebolCup from "./../assets/icon-cup/conmebol.png";
import iconOfcCup from "./../assets/icon-cup/ofc.png";
import iconWorldCup from "./../assets/icon-cup/world.png";
import iconUefaCup from "./../assets/icon-cup/uefa.png";
import iconAfcCup from "./../assets/icon-cup/afc.png";
import iconCafCup from "./../assets/icon-cup/caf.png";

export const nationalCompetition: NationalTournaments = {
  CONCACAF: {
    id: "5-concacaf",
    title: "concacaf Gold Cup",
    iconCup: iconConcacafCup,
    path: "concacaf-cup",
    color: "#300010",
  },
  CONMEBOL: {
    id: "6-conmebol",
    title: "CONMEBOL Copa América",
    iconCup: iconConmebolCup,
    path: "conmebol-cup",
    color: "#292600",
  },
  OFC: {
    id: "7-ofc",
    title: "ofc Nations Cup",
    iconCup: iconOfcCup,
    path: "ofc-cup",
    color: "#5E2A00",
  },
  FIFA: {
    id: "1-worldCup",
    title: "FIFA World Cup",
    iconCup: iconWorldCup,
    path: "world-cup",
    color: "#5F5C1C",
    size: "190px",
  },
  UEFA: {
    id: "2-uefa",
    title: "European Championship",
    iconCup: iconUefaCup,
    path: "uefa-cup",
    color: "#002645",
  },
  AFC: {
    id: "3-afc",
    title: "afc Asian Cup",
    iconCup: iconAfcCup,
    path: "afc-cup",
    color: "#2C003D",
  },
  CAF: {
    id: "4-caf",
    title: "Africa Cup of Nations",
    iconCup: iconCafCup,
    path: "caf-cup",
    color: "#012B00",
  },
};