import { PATH } from "@/app/model/path";
import { NavItems } from "./types";

export const navItems: NavItems = [
  { title: "About", path: PATH.about },
  { title: "National tournaments", path: PATH.nationalTournaments },
  { title: "Club tournaments", path: PATH.clubTournaments},
  { title: "National teams", path: PATH.teams },
  { title: "Clubs", path: PATH.clubs },
];