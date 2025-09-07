import { MatchInfo } from "@/features/matchDisplay"


export const sortGroupNames = (matches: MatchInfo[]) => {
  const uniqueGroupName = new Set(matches.map((match) => match.stage))

  return Array.from(uniqueGroupName).sort()
}
