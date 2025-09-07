import { MatchInfo } from "@/features/matchDisplay"


export const deleteMatchesReplay = (matches: MatchInfo[]) => {
  return matches.filter(match => match.date.split(' ')[1] !== 'REPLAY')
}