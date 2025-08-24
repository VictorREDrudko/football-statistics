import { Team } from '@/entities/team'
import { Country } from '@/shared/types/country'
import { NationalTeamsMap } from '../types/nationalTeams'

export const getTeamByCountry = (
  teams: NationalTeamsMap,
  country: Country
): Team | undefined => {
  return teams[country]
}

export const getTeamFlagByYear = (team: Team, year: string): string => {
  for (const flag of team.flags) {
    const periods = flag.period.split(', ')

    for (const period of periods) {
      const [start, endRaw] = period.split('-')
      const end =
        endRaw === 'p.t.' ? new Date().getFullYear().toString() : endRaw

      if (+year >= +start && +year <= +end) {
        return flag.flagPath
      }
    }
  }
  return ''
}

export const getTeamNameByYear = (team: Team, year: string): string => {
  for (const name of team.names) {
    const periods = name.period.split(', ')

    for (const period of periods) {
      const [start, endRaw] = period.split('-')
      const end =
        endRaw === 'p.t.' ? new Date().getFullYear().toString() : endRaw

      if (+year >= +start && +year <= +end) {
        return name.name
      }
    }
  }
  return team.names[0]?.name || ''
}
