import { CountryFlag } from '@/entities/team'
import { getCurrentYear } from '@/shared/lib'

export const choiseFlagByYear = (
  flags: CountryFlag[],
  year: string
): string => {
  const currentYear = getCurrentYear()

  for (const flagData of flags) {
    const periods = flagData.period.split(', ')

    for (const period of periods) {
      const [startYear, end] = period.split('-')
      const endYear = end === 'p.t.' ? currentYear.toString() : end

      if (+year >= +startYear && +year <= +endYear) {
        return flagData.flagPath
      }
    }
  }
  return ''
}
