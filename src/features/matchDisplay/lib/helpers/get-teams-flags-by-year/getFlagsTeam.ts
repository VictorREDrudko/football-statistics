import { CountryFlag, Teams } from '@/entities/team'
import { Country } from '@/shared/types'

export const getFlagsTeam = (
  teamsData: Teams,
  team: Country
): CountryFlag[] => {
  return teamsData[team]?.flags || [{ flagPath: '', period: '' }]
}
