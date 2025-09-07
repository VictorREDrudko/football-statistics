import { MatchInfo } from "@/features/matchDisplay"


export const getTeamsNameFromMatches = (matches: MatchInfo[]) => {
  return Array.from(new Set(matches.map((match) => match.teams).flat()))
}
