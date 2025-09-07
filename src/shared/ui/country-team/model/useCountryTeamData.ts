import { useGetTeamDataFromStore } from '@/entities/country-team/model/hooks/useGetTeamDataFromStore'
import {
  choiseCountryNameByYear,
  choiseFlagByYear,
} from '@/entities/country-team/lib'
import { Country } from '@/shared'

export const useCountryTeamData = (countryName: Country, year: string) => {
  const { getTeam } = useGetTeamDataFromStore()
  const teamData = getTeam(countryName)

  if (!teamData) {
    throw new Error(`National team not found: ${countryName}`)
  }

  const countryNameByYear = choiseCountryNameByYear(teamData.names, year)
  const flagSrcByYear = choiseFlagByYear(teamData.flags, year)
  const isCountryReal = teamData.isCountryReal

  return {
    countryNameByYear,
    flagSrcByYear,
    isCountryReal,
  }
}
