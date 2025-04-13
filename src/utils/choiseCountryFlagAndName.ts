import {
  CountryFlag,
  CountryName,
} from "data/nationalTeamsData/type-nationalTeams";

export const choiseCountryFlag = (flags: CountryFlag[], year: string) => {
  const currentYear = new Date().getFullYear();

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

export const choiseCountryName = (names: CountryName[], year: string) => {
  const currentYear = new Date().getFullYear();

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
