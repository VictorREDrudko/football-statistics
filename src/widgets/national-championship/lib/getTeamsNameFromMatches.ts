import { MatchInfo } from '@/shared/model'

export const getTeamsNameFromMatches = (matches: MatchInfo[]) => {
  return Array.from(new Set(matches.map((match) => match.teams).flat()))
}
