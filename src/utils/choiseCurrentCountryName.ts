import { nationalTeams } from "../data/nationalTeamsData/nationalTeams";
import { getCurrentYear } from "./getCurrentYear";


type CountryNameParams = {
  name: string;
  year: string;
};

export const choiseCurrentCountryName = ({name, year} :CountryNameParams) => {
  const currentYear = getCurrentYear();

  const names = nationalTeams[name].names

  for (let name of names) {
    let periods = name.period.split(", ");

    for (let period of periods) {
      let [start, end] = period.split("-");
      end = end === "p.t." ? currentYear.toString() : end;

      if (+year >= +start && +year <= +end) {
        return name.nameCountry;
      }
    }
  }
  return "";
};
