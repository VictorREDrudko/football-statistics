import { CountryName, Teams } from '@/entities/team'
import { getCurrentYear } from '@/shared/lib'
import { Country } from '@/shared/types'
import { getNamesTeam } from './getNamesTeam'

export const getTeamsNamesByYear = (
  teams: Country[],
  teamsData: Teams,
  year: string
): string[] => {
  const currentYear = getCurrentYear()
  const [team1, team2] = teams

  const namesData: CountryName[][] = [
    getNamesTeam(teamsData, team1),
    getNamesTeam(teamsData, team2),
  ]

  return namesData.map((namesTeam) => {
    for (const nameTeam of namesTeam) {
      const periods = nameTeam.period.split(', ')

      for (const period of periods) {
        const [startYear, end] = period.split('-')
        const endYear = end === 'p.t.' ? currentYear.toString() : end

        if (+year >= +startYear && +year <= +endYear) {
          return nameTeam.name
        }
      }
    }
    return ''
  })
}
