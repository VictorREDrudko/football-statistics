import { useTeamsStore } from '@/features/teams-store'
import { Country } from '@/shared/types'
import { choiseFlagByYear } from '../../lib/choiseFlagByYear'
import { choiseCountryNameByYear } from '../../lib/choiseCountryNameByYear'

export const useCountryTeamData = (countryName: Country, year: string) => {
  const { getTeam } = useTeamsStore()
  const teamData = getTeam(countryName)

  if (!teamData) {
    throw new Error(`National team not found: ${countryName}`)
  }

  const countryNameByYear = choiseCountryNameByYear(teamData.names, year)
  const flagSrc = choiseFlagByYear(teamData.flags, year)
  const isCountryReal = teamData.isCountryReal

  return {
    countryNameByYear,
    flagSrc,
    isCountryReal,
  }
}
