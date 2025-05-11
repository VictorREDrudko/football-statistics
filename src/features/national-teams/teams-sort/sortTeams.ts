import { ConfederationCode } from "@/entities";
import { getConfederationTeams } from "./lib/getConfederationTeams";
import { getSortType } from "./lib/getSortType";
import { getCurrentCountryName } from "@/shared";

export const sortTeams = (confederation: ConfederationCode, searchParams: URLSearchParams) => {
  const teams = getConfederationTeams(confederation);
  const sortType = getSortType(searchParams)

  // сортировка по алфавиту
  if (sortType === 'alphabet') {
    return teams.sort((a, b) => getCurrentCountryName(a.names).localeCompare(getCurrentCountryName(b.names)));
  } 

  // сортировка по рейтингу
  if (sortType === 'rating') teams.sort((a, b) => b.rating.points - a.rating.points);

  return teams;
};