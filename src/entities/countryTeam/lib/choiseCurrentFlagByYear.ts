import { getCurrentYear } from '@/shared/lib'
import { Country, nationalTeamsStore } from '@/shared/model'

export const choiseCurrentFlagByYear = (name: string, year: string): string => {
  // Получаем текущий год для замены p.t.
  const currentYear = getCurrentYear()
  // Массив флагов
  const flags = nationalTeamsStore[name as Country].flags

  // Проходим циклом по каждому флагу:
  // { countryFlag: flagGermany, period: '1919-1932, 1946-p.t.' }
  for (const flag of flags) {
    // Получаем периоды [1919-1932', '1946-p.t.']
    const periods = flag.period.split(', ')

    // Проходим по каждому периоду
    for (const period of periods) {
      const startPeriod = period.split('-')[0]
      let endPeriod = period.split('-')[1]

      // Если endPeriod === 'p.t.', то меняем его на currentYear
      endPeriod = endPeriod === 'p.t.' ? currentYear.toString() : endPeriod

      // Условие возврата src флага
      if (+year >= +startPeriod && +year <= +endPeriod) {
        return flag.countryFlag
      }
    }
  }
  return ''
}
