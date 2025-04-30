import { getCurrentYear } from "./getCurrentYear";
import { nationalTeams } from "data/nationalTeamsData/nationalTeams";

type FlagParams = {
  name: string;
  year: string;
};

export const choiseCurrentFlag = ({ name, year }: FlagParams) => {
  const currentYear = getCurrentYear();

  const flags = nationalTeams[name].flags

  for (let flag of flags) {
    let periods = flag.period.split(", ");

    for (let period of periods) {
      let [start, end] = period.split("-");
      end = end === "p.t." ? currentYear.toString() : end;

      if (+year >= +start && +year <= +end) {
        return flag.flagCountry;
      }
    }
  }
  return "";
};
