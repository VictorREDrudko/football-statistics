import { nationalTeamsData } from "@/entities"
import { getCurrentYear } from "@/shared"

type CountryNameParams = {
  name: string
  year: string
}

export const choiseCurrentCountryName = ({ name, year }: CountryNameParams) => {
  const currentYear = getCurrentYear()

  const names = nationalTeamsData[name].names

  for (let name of names) {
    let periods = name.period.split(', ')

    for (let period of periods) {
      let [start, end] = period.split('-')
      end = end === 'p.t.' ? currentYear.toString() : end

      if (+year >= +start && +year <= +end) {
        return name.nameCountry
      }
    }
  }
  return ''
}
