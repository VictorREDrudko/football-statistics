import { nationalTeamsData } from "@/entities"
import { getCurrentYear } from "@/shared/lib/getCurrentYear"

type FlagParams = {
  name: string
  year: string
}

export const choiseCurrentFlag = ({ name, year }: FlagParams) => {
  const currentYear = getCurrentYear()

  const flags = nationalTeamsData[name].flags

  for (let flag of flags) {
    let periods = flag.period.split(', ')

    for (let period of periods) {
      let [start, end] = period.split('-')
      end = end === 'p.t.' ? currentYear.toString() : end

      if (+year >= +start && +year <= +end) {
        return flag.flagCountry
      }
    }
  }
  return ''
}
