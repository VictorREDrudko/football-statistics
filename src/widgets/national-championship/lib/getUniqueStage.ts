import { MatchInfo } from "@/features/matchDisplay";


export const getUniqueStage = (matches: MatchInfo[]) => {
  return Array.from(new Set(matches.map((match) => match.stage))).sort().reverse();
};