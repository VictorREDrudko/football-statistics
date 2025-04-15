import { CountryName } from "./../../data/nationalTeamsData/type-nationalTeams";

export const getCurrentCountryName = (names: CountryName[]) => {
  const currentName = names.filter((name, index) =>
    // name.period.includes("p.t.")
    index === 0
  );
  return currentName[0].nameCountry;
};