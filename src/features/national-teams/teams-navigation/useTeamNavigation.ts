import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ConfederationCode } from '@/entities'
import { urlWithoutHyphen } from './lib/urlWithoutHyphen'

export const useTeamNavigation = () => {
  const navigate = useNavigate()
  const { confederationRoute, teamRoute } = useParams<{ confederationRoute?: ConfederationCode; teamRoute?: string }>()
  const [searchParams] = useSearchParams()

  const [confederation, setConfederation] = useState<ConfederationCode>('UEFA')
  const [team, setTeam] = useState<string>('')
  const sortType = searchParams.get('sort') || 'alphabet';

  useEffect(() => {
    const validConfederation = confederationRoute || 'UEFA'
    if (validConfederation !== confederation) {
      setConfederation(validConfederation)
    }
  }, [confederationRoute])

  useEffect(() => {
    setTeam(teamRoute ? urlWithoutHyphen(teamRoute) : '')
  }, [teamRoute])

  const handleConfederationChange = useCallback(
    (newConfederation: ConfederationCode) => {
      // Important: First update the state, then the navigation
      setConfederation(newConfederation)
      setTeam('')
      navigate(`/teams/${newConfederation}?sort=${sortType}`)
    },
    [navigate, sortType]
  )

  const handleTeamSelect = useCallback( (teamName: string) => {
      navigate(`/teams/${confederation}/${teamName}?sort=${sortType}`)
    },
    [confederation, navigate, sortType]
  )

  const handleCloseTeamCard = useCallback(() => {
    navigate(`/teams/${confederation}?sort=${sortType}`)
  }, [confederation, navigate, sortType])

  return {
    confederation,
    team,
    searchParams,
    handleTeamSelect,
    handleCloseTeamCard,
    handleConfederationChange,
  }
}
