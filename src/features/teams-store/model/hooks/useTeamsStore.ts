import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/store'
import { useCallback } from 'react'
import {
  setTeams,
  setLoading,
  setError,
  updateTeam,
} from '../slice/teamsSlice'
import { Team } from '@/entities/team'
import { Country } from '@/shared/types/country'

export const useTeamsStore = () => {
  const dispatch = useDispatch()
  const teams = useSelector((state: RootState) => state.teams.teams)
  const isLoading = useSelector(
    (state: RootState) => state.teams.isLoading
  )
  const error = useSelector((state: RootState) => state.teams.error)

  const getTeam = useCallback(
    (country: Country): Team | undefined => {
      return teams[country]
    },
    [teams]
  )

  const getTeamByName = useCallback(
    (countryName: string): Team | undefined => {
      return Object.values(teams).find((team) =>
        team.names.some((name) => name.name === countryName)
      )
    },
    [teams]
  )

  const updateTeamData = useCallback(
    (country: Country, team: Team) => {
      dispatch(updateTeam({ country, team }))
    },
    [dispatch]
  )

  const loadTeams = useCallback(async () => {
    try {
      dispatch(setLoading(true))
      // Здесь может быть API вызов для загрузки данных
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setError('Failed to load teams'))
      dispatch(setLoading(false))
    }
  }, [dispatch])

  return {
    teams,
    isLoading,
    error,
    getTeam,
    getTeamByName,
    updateTeamData,
    loadTeams,
  }
}
