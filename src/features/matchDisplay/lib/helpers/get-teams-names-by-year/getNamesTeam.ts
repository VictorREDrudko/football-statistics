import { CountryName, Teams } from '@/entities/team'
import { Country } from '@/shared/types'

export const getNamesTeam = (
  teamsData: Teams,
  team: Country
): CountryName[] => {
  return teamsData[team]?.names || [{ name: team, period: '' }]
}
