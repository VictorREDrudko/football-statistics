import { CountryFlag, Teams } from '@/entities/team'
import { getCurrentYear } from '@/shared/lib'
import { Country } from '@/shared/types'
import { getFlagsTeam } from './getFlagsTeam'

export const getTeamsFlagsByYear = (
  teams: Country[],
  teamsData: Teams,
  year: string
): string[] => {
  const currentYear = getCurrentYear()
  const [team1, team2] = teams

  const flagsData: CountryFlag[][] = [
    getFlagsTeam(teamsData, team1),
    getFlagsTeam(teamsData, team2),
  ]

  return flagsData.map((flagsTeam) => {
    for (const flagData of flagsTeam) {
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
  })
}
