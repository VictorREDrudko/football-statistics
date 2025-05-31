import { nationalTeamsData } from "@/entities"
import { getCurrentYear } from "../getCurrentYear"

type Params = {
  countryName: string
  year: string
}

export const getCountryNameByYear = ({ countryName, year }: Params) => {
  const currentYear = getCurrentYear()
  const countryNames = nationalTeamsData[countryName].names

  for (let name of countryNames) {
    // "1919-1932, 1946-p.t."
    let periods = name.period.split(', ')

    for (let period of periods) {
      // "1919-1932"
      let [start, end] = period.split('-')
      end = end === 'p.t.' ? currentYear.toString() : end

      if (+year >= +start && +year <= +end) {
        return name.nameCountry
      }
    }
  }
  return countryName
}
