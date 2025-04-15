import { NationalTeam } from "data/nationalTeamsData/type-nationalTeams";
import { getCurrentCountryName } from "./getCurrentCountryName";

export const sortTeams = (teams: NationalTeam[], sortType: string) => {
  // сортировка по алфавиту
  if (sortType === 'alphabet') {
    return teams.sort((a, b) => getCurrentCountryName(a.names).localeCompare(getCurrentCountryName(b.names)));
  } 

  // сортировка по рейтингу
  if (sortType === 'rating') teams.sort((a, b) => b.rating.points - a.rating.points);

  return teams;
};