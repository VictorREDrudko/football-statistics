import { getCurrentYear } from '@/shared/lib'
import { Country, nationalTeamsStore } from '@/shared/model'

export const choiseCountryNameByYear = (countryName: string, year: string) => {
  const currentYear = getCurrentYear()
  const countryNames = nationalTeamsStore[countryName as Country].names

  for (const name of countryNames) {
    // Получаем периоды [1919-1932', '1946-p.t.']
    const periods = name.period.split(', ')

    // Проходим по каждому периоду
    for (const period of periods) {
      const startPeriod = period.split('-')[0]
      let endPeriod = period.split('-')[1]

      // Если endPeriod === 'p.t.', то меняем его на currentYear
      endPeriod = endPeriod === 'p.t.' ? currentYear.toString() : endPeriod

      // Условие возврата src флага
      if (+year >= +startPeriod && +year <= +endPeriod) {
        return name.nameCountry
      }
    }
  }
  return ''
}
