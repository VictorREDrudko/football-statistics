import { CountryFlag } from "../../data/nationalTeamsData/type-nationalTeams";

export const getCurrentCountryFlag = (flags: CountryFlag[]) => {
  const currentFlag = flags.filter((flag) =>
    flag.period.includes("p.t.")
  );
  return currentFlag[0].flagCountry;
};