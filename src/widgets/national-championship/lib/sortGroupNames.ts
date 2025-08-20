import { Match } from '@/entities/match/model/types'

export const sortGroupNames = (matches: Match[]) => {
  // if (matches[0].stage.split(":")[0].trim() === "group Final round") {
  //   return Array.from(new Set(matches.map((match) => match.stage.split(":")[0].trim()))).sort();
  // }

  return Array.from(new Set(matches.map((match) => match.stage))).sort()
}
