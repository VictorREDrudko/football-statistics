
import { MatchInfo } from '@/features/matchDisplay'
import { changeScoreMatchesReplay } from './changeScoreMatchesReplay'
import { deleteMatchesReplay } from './deleteMatchesReplay'
import { STAGES } from '@/shared/constants/tournament/stages'


// сортировка матчей внутри стадий (формирование сетки турнира)
export const generateChampionshipGrid = (
  matchesByStage: MatchInfo[][],
  stages: string[]
) => {
  const numberStages = matchesByStage.length
  const grid: MatchInfo[][] = []

  const matches = matchesByStage.flat()
  const finalMatch = matches.filter(
    (match) => match.stage === STAGES.FINAL
  )
  const thirdPlaceMatch = matches.filter(
    (match) => match.stage === STAGES.THIRD_PLACE
  )
  const semiFinalsMatches = matches.filter(
    (match) => match.stage === STAGES.SEMI_FINAL
  )
  const quarterFinalsMatches = matches.filter(
    (match) => match.stage === STAGES.QUARTER_FINAL
  )
  const roundOf16Matches = matches.filter(
    (match) => match.stage === STAGES.ROUND_OF_16
  )

  // Option 1: stages includes final and the match for 3rd place (2 stages)
  if (numberStages === 2 && stages.includes(STAGES.THIRD_PLACE)) {
    grid.push(finalMatch, thirdPlaceMatch)
  }

  // Option 2: stages includes final and semi-final (2 stages)
  if (numberStages === 2 && !stages.includes(STAGES.THIRD_PLACE)) {
    grid.push(finalMatch, semiFinalsMatches)
  }

  // Option 3, 4: stages includes:  final, match for 3rd place, 1/2, 1/4, +-1,8 finals (5 or 6 stages)
  if (numberStages === 5 || numberStages === 4) {
    // переменные-метки команд для формирования сетки play-off
    const [teamChampion, teamRunnerUp] = finalMatch[0].teams

    // проверяем если есть матчи переигровки ( сортируем вместе матчи с одинаковыми командами)
    if (semiFinalsMatches.length > 2) {
      semiFinalsMatches.sort((matchA, matchB) => {
        const teamsA = matchA.teams.join()
        const teamsB = matchB.teams.join()

        return teamsA.localeCompare(teamsB)
      })
    }

    // если первыми идут матчи не с командой чемпионом, то меняем порядок матчей
    const sortedSemiFinalsMatches = semiFinalsMatches[0].teams.includes(
      teamChampion
    )
      ? semiFinalsMatches
      : semiFinalsMatches.reverse()
    const teamSemiFinalLoser1 = sortedSemiFinalsMatches[0].teams[1]
    const teamSemiFinalLoser2 =
      sortedSemiFinalsMatches[sortedSemiFinalsMatches.length - 1].teams[1]

    // 4. массив матчей четвертьфинала
    // массивы 1, 2, 3, 4 матча четвертьфинала
    const quarterFinalsMatches1 = quarterFinalsMatches.filter((match) =>
      match.teams.includes(teamChampion)
    )
    const quarterFinalsMatches2 = quarterFinalsMatches.filter((match) =>
      match.teams.includes(teamSemiFinalLoser1)
    )
    const quarterFinalsMatches3 = quarterFinalsMatches.filter((match) =>
      match.teams.includes(teamRunnerUp)
    )
    const quarterFinalsMatches4 = quarterFinalsMatches.filter((match) =>
      match.teams.includes(teamSemiFinalLoser2)
    )

    // переменные-метки команд для формирования сетки play-off
    const teamQuarterFinalLoser1 = quarterFinalsMatches1[0].teams[1]
    const teamQuarterFinalLoser2 = quarterFinalsMatches2[0].teams[1]
    const teamQuarterFinalLoser3 = quarterFinalsMatches3[0].teams[1]
    const teamQuarterFinalLoser4 = quarterFinalsMatches4[0].teams[1]

    // сортированный массив матчей четвертьфинала
    const sortedQuarterFinalsMatches: MatchInfo[] = [
      ...quarterFinalsMatches1,
      ...quarterFinalsMatches2,
      ...quarterFinalsMatches3,
      ...quarterFinalsMatches4,
    ]

    // счет матчей сформирован с учетом переигровок
    const quarterFinalsMatchesWithChangeScore = changeScoreMatchesReplay(
      sortedQuarterFinalsMatches
    )
    // матчи четвертьфинала без отображения переигровок
    const quarterFinalsMatchesWithoutReplay = deleteMatchesReplay(
      quarterFinalsMatchesWithChangeScore
    )

    // 5. массив матчей 1/8 финала
    const teamRoundOf16Loser1 = roundOf16Matches.filter((match) =>
      match.teams.includes(teamChampion)
    )
    const teamRoundOf16Loser2 = roundOf16Matches.filter((match) =>
      match.teams.includes(teamQuarterFinalLoser1)
    )
    const teamRoundOf16Loser3 = roundOf16Matches.filter((match) =>
      match.teams.includes(teamSemiFinalLoser1)
    )
    const teamRoundOf16Loser4 = roundOf16Matches.filter((match) =>
      match.teams.includes(teamQuarterFinalLoser2)
    )
    const teamRoundOf16Loser5 = roundOf16Matches.filter((match) =>
      match.teams.includes(teamRunnerUp)
    )
    const teamRoundOf16Loser6 = roundOf16Matches.filter((match) =>
      match.teams.includes(teamQuarterFinalLoser3)
    )
    const teamRoundOf16Loser7 = roundOf16Matches.filter((match) =>
      match.teams.includes(teamSemiFinalLoser2)
    )
    const teamRoundOf16Loser8 = roundOf16Matches.filter((match) =>
      match.teams.includes(teamQuarterFinalLoser4)
    )

    const sortedRoundOf16: MatchInfo[] = [
      ...teamRoundOf16Loser1,
      ...teamRoundOf16Loser2,
      ...teamRoundOf16Loser3,
      ...teamRoundOf16Loser4,
      ...teamRoundOf16Loser5,
      ...teamRoundOf16Loser6,
      ...teamRoundOf16Loser7,
      ...teamRoundOf16Loser8,
    ]

    const roundOf16MatchesWithChangeScore =
      changeScoreMatchesReplay(sortedRoundOf16)
    const roundOf16MatchesWithoutReplay = deleteMatchesReplay(
      roundOf16MatchesWithChangeScore
    )

    grid.push(
      finalMatch,
      thirdPlaceMatch,
      semiFinalsMatches,
      quarterFinalsMatchesWithoutReplay,
      roundOf16MatchesWithoutReplay
    )
  }

  return grid
}
