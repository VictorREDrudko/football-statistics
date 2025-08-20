import { MatchInfo } from '@/shared/model'

export const sortGroupNames = (matches: MatchInfo[]) => {
  const uniqueGroupName = new Set(matches.map((match) => match.stage))

  return Array.from(uniqueGroupName).sort()
}
