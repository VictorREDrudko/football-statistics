import { CountryName } from '@/entities/team'
import { getCurrentYear } from '@/shared/lib'

export const choiseCountryNameByYear = (
  names: CountryName[],
  year: string
): string => {
  const currentYear = getCurrentYear()

  for (const nameData of names) {
    const periods = nameData.period.split(', ')

    for (const period of periods) {
      const [startYear, end] = period.split('-')
      const endYear = end === 'p.t.' ? currentYear.toString() : end

      if (+year >= +startYear && +year <= +endYear) {
        return nameData.name
      }
    }
  }
  return ''
}
