import { Match } from '@/entities/match/model/types'

export const uniqueTeamsFromMatches = (matches: Match[]) => {
  return Array.from(new Set(matches.map((match) => match.teams).flat()))
}
