import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store/store'
import { Team } from '@/entities'
import { Country } from '@/shared'

export const useGetTeamDataFromStore = () => {
  const teamsData = useSelector(
    (state: RootState) => state['national-teams'].teams
  )

  const getTeam = useCallback(
    (country: Country): Team | undefined => {
      return teamsData[country]
    },
    [teamsData]
  )

  return {
    getTeam,
  }
}
