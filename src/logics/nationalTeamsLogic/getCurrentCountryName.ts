import { CountryName } from "./../../data/nationalTeamsData/type-nationalTeams";

export const getCurrentCountryName = (names: CountryName[]) => {
  const currentName = names.filter((name) =>
    name.period.includes("p.t.")
  );
  return currentName[0].nameCountry;
};