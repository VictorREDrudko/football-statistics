import { Teams } from '@/entities/team'
import { Country } from '@/shared/types'

export const getIsRealTeams = (
  teams: Country[],
  teamsData: Teams
): boolean[] => {
  const [team1, team2] = teams

  const isRealTeam1 = teamsData[team1]?.isCountryReal || false
  const isRealTeam2 = teamsData[team2]?.isCountryReal || false

  return [isRealTeam1, isRealTeam2]
}
