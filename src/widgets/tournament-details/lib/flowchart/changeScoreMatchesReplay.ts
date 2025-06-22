import { MatchInfo } from "@/shared";

export const changeScoreMatchesReplay = (matches: MatchInfo[]) => {
  const matchesStage = structuredClone(matches);

  matchesStage.forEach((match, index) => {
    if(match.date.split(' ')[1] === 'REPLAY') {
      matchesStage[index - 1].score = [...matchesStage[index - 1].score, ...match.score]
      match.score = []
    }
  })

  return matchesStage
}