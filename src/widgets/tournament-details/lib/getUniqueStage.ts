import { MatchInfo } from "@/shared";

export const getUniqueStage = (matches: MatchInfo[]) => {
  return Array.from(new Set(matches.map((match) => match.stage))).sort().reverse();
};