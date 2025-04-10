import { WorldCupMatch } from "data/worldCupData/type-worldCupData"

// распределение матчей play-off по стадиям (финал, полуфинал ...)
export const generateMatchesByStage = (playOffStages: string[], matches: WorldCupMatch[]) : WorldCupMatch[][] => {
  const matchesByStage = playOffStages.map(stage => {
    return matches.filter(match => match.stage === stage)
  })

  return matchesByStage
}

// сортировка матчей play-off внутри стадий для формирования сетки турнира
// чтобы корректно отрисовать в React Flow
export const generatePlayoffGrid = (matchesByStage: WorldCupMatch[][]) => {
  const playoffGrid: WorldCupMatch[][] = [];
  const matches = matchesByStage.flat();

  // вариант 1: play-off включает только финал и полуфинал (2 стадии)
  if(matchesByStage.length === 2) {
    const finalMatch = matches.filter(match => match.stage === '1:final')
    const semiFinalsMatches = matches.filter(match => match.stage === '3:1/2 semi-finals')
  
    playoffGrid.push(finalMatch, semiFinalsMatches)
  }

  // вариант 2: play-off включает: финал, матч за 3 место, 1/2, 1/4, 1,8 (5 стадий)
  // вариант 3: play-off включает: финал, матч за 3 место, 1/2, 1/4 (4 стадии)
  if(matchesByStage.length === 5 || matchesByStage.length === 4) {
    // 1. массив матчей финала
    const finalMatches = matches.filter(match => match.stage === '1:final')
    // переменные-метки команд для формирования сетки play-off
    const teamChampion = finalMatches[0].teams[0]
    const teamRunnerUp = finalMatches[0].teams[1]

    // 2. массив матчей за 3-е место
    const thirdPlaceMatches = matches.filter(match => match.stage === '2:third place play-off')
  
    // 3. массив матчей полуфинала
    const semiFinalsMatches = matches.filter(match => match.stage === '3:1/2 semi-finals')
    // проверяем если есть матчи переигровки то сортируем вместе матчи с одинаковыми командами
    if(semiFinalsMatches.length > 2) {
        semiFinalsMatches.sort((matchA, matchB) => {
        const teamsA = matchA.teams.join();
        const teamsB = matchB.teams.join();

        return teamsA.localeCompare(teamsB);
      });
    }
    // если первыми идут матчи не с командой чемпионом, то меняем порядок матчей
    const sortedSemiFinalsMatches = semiFinalsMatches[0].teams.includes(teamChampion) ? semiFinalsMatches : semiFinalsMatches.reverse()

    const teamSemiFinalLoser1 = sortedSemiFinalsMatches[0].teams[1]
    const teamSemiFinalLoser2 = sortedSemiFinalsMatches[sortedSemiFinalsMatches.length - 1].teams[1]

    // 4. массив матчей четвертьфинала
    const quarterFinalsMatches = matches.filter(match => match.stage === '4:1/4 quarter-finals')
  
    // массивы 1, 2, 3, 4 матча четвертьфинала
    const quarterFinalsMatches1 = quarterFinalsMatches.filter(match => match.teams.includes(teamChampion))
    const quarterFinalsMatches2 = quarterFinalsMatches.filter(match => match.teams.includes(teamSemiFinalLoser1))
    const quarterFinalsMatches3 = quarterFinalsMatches.filter(match => match.teams.includes(teamRunnerUp))
    const quarterFinalsMatches4 = quarterFinalsMatches.filter(match => match.teams.includes(teamSemiFinalLoser2))

    // переменные-метки команд для формирования сетки play-off
    const teamQuarterFinalLoser1 = quarterFinalsMatches1[0].teams[1]
    const teamQuarterFinalLoser2 = quarterFinalsMatches2[0].teams[1]
    const teamQuarterFinalLoser3 = quarterFinalsMatches3[0].teams[1]
    const teamQuarterFinalLoser4 = quarterFinalsMatches4[0].teams[1]

    // сортированный массив матчей четвертьфинала
    const sortedQuarterFinalsMatches: WorldCupMatch[] = [
      ...quarterFinalsMatches1, 
      ...quarterFinalsMatches2, 
      ...quarterFinalsMatches3, 
      ...quarterFinalsMatches4
    ]

    // счет матчей сформирован с учетом переигровок
    const quarterFinalsMatchesWithChangeScore = changeScoreMatchesReplay(sortedQuarterFinalsMatches)
    // матчи четвертьфинала без отображения переигровок
    const quarterFinalsMatchesWithoutReplay = deleteMatchesReplay(quarterFinalsMatchesWithChangeScore)
  
    // 5. массив матчей 1/8 финала
    const roundOf16Matches = matches.filter(match => match.stage === '5:1/8 round of 16')
  
    const teamRoundOf16Loser1 = roundOf16Matches.filter(match => match.teams.includes(teamChampion))
    const teamRoundOf16Loser2 = roundOf16Matches.filter(match => match.teams.includes(teamQuarterFinalLoser1))
    const teamRoundOf16Loser3 = roundOf16Matches.filter(match => match.teams.includes(teamSemiFinalLoser1))
    const teamRoundOf16Loser4 = roundOf16Matches.filter(match => match.teams.includes(teamQuarterFinalLoser2))
    const teamRoundOf16Loser5 = roundOf16Matches.filter(match => match.teams.includes(teamRunnerUp))
    const teamRoundOf16Loser6 = roundOf16Matches.filter(match => match.teams.includes(teamQuarterFinalLoser3))
    const teamRoundOf16Loser7 = roundOf16Matches.filter(match => match.teams.includes(teamSemiFinalLoser2))
    const teamRoundOf16Loser8 = roundOf16Matches.filter(match => match.teams.includes(teamQuarterFinalLoser4))
  
    const sortedRoundOf16: WorldCupMatch[] = [
      ...teamRoundOf16Loser1,
      ...teamRoundOf16Loser2,
      ...teamRoundOf16Loser3,
      ...teamRoundOf16Loser4,
      ...teamRoundOf16Loser5,
      ...teamRoundOf16Loser6,
      ...teamRoundOf16Loser7,
      ...teamRoundOf16Loser8,
    ]
  
    const roundOf16MatchesWithChangeScore = changeScoreMatchesReplay(sortedRoundOf16)
    const roundOf16MatchesWithoutReplay = deleteMatchesReplay(roundOf16MatchesWithChangeScore)

    playoffGrid.push( finalMatches, 
                      thirdPlaceMatches, 
                      semiFinalsMatches,
                      quarterFinalsMatchesWithoutReplay,
                      roundOf16MatchesWithoutReplay )
  }

  // // вариант 3: play-off включает: финал, матч за 3 место, 1/2, 1/4 (4 стадии)
  // if(matchesByStage.length === 4) {
  //   // 1. массив матчей финала
  //   const finalMatches = matches.filter(match => match.stage === '1:final')
  //   // переменные-метки команд для формирования сетки play-off
  //   const teamChampion = finalMatches[0].teams[0]
  //   const teamRunnerUp = finalMatches[0].teams[1]

  //   // 2. массив матчей за 3-е место
  //   const thirdPlaceMatches = matches.filter(match => match.stage === '2:third place play-off')
  
  //   // 3. массив матчей полуфинала
  //   const semiFinalsMatches = matches.filter(match => match.stage === '3:1/2 semi-finals')
  //   // проверяем если есть матчи переигровки то сортируем вместе матчи с одинаковыми командами
  //   if(semiFinalsMatches.length > 2) {
  //       semiFinalsMatches.sort((matchA, matchB) => {
  //       const teamsA = matchA.teams.join();
  //       const teamsB = matchB.teams.join();

  //       return teamsA.localeCompare(teamsB);
  //     });
  //   }
  //   // если первыми идут матчи не с командой чемпионом, то меняем порядок матчей
  //   const sortedSemiFinalsMatches = semiFinalsMatches[0].teams.includes(teamChampion) ? semiFinalsMatches : semiFinalsMatches.reverse()

  //   const teamSemiFinalLoser1 = sortedSemiFinalsMatches[0].teams[1]
  //   const teamSemiFinalLoser2 = sortedSemiFinalsMatches[sortedSemiFinalsMatches.length - 1].teams[1]

  //   // 4. массив матчей четвертьфинала
  //   const quarterFinalsMatches = matches.filter(match => match.stage === '4:1/4 quarter-finals')
  
  //   // массивы 1, 2, 3, 4 матча четвертьфинала
  //   const quarterFinalsMatches1 = quarterFinalsMatches.filter(match => match.teams.includes(teamChampion))
  //   const quarterFinalsMatches2 = quarterFinalsMatches.filter(match => match.teams.includes(teamSemiFinalLoser1))
  //   const quarterFinalsMatches3 = quarterFinalsMatches.filter(match => match.teams.includes(teamRunnerUp))
  //   const quarterFinalsMatches4 = quarterFinalsMatches.filter(match => match.teams.includes(teamSemiFinalLoser2))

  //   // переменные-метки команд для формирования сетки play-off
  //   const teamQuarterFinalLoser1 = quarterFinalsMatches1[0].teams[1]
  //   const teamQuarterFinalLoser2 = quarterFinalsMatches2[0].teams[1]
  //   const teamQuarterFinalLoser3 = quarterFinalsMatches3[0].teams[1]
  //   const teamQuarterFinalLoser4 = quarterFinalsMatches4[0].teams[1]

  //   // сортированный массив матчей четвертьфинала
  //   const sortedQuarterFinalsMatches: WorldCupMatch[] = [
  //     ...quarterFinalsMatches1, 
  //     ...quarterFinalsMatches2, 
  //     ...quarterFinalsMatches3, 
  //     ...quarterFinalsMatches4
  //   ]

  //   // счет матчей сформирован с учетом переигровок
  //   const quarterFinalsMatchesWithChangeScore = changeScoreMatchesReplay(sortedQuarterFinalsMatches)
  //   // матчи четвертьфинала без отображения переигровок
  //   const quarterFinalsMatchesWithoutReplay = deleteMatchesReplay(quarterFinalsMatchesWithChangeScore)
  
  //   // 5. массив матчей 1/8 финала
  //   const roundOf16Matches = matches.filter(match => match.stage === '5:1/8 round of 16')
  
  //   const teamRoundOf16Loser1 = roundOf16Matches.filter(match => match.teams.includes(teamChampion))
  //   const teamRoundOf16Loser2 = roundOf16Matches.filter(match => match.teams.includes(teamQuarterFinalLoser1))
  //   const teamRoundOf16Loser3 = roundOf16Matches.filter(match => match.teams.includes(teamSemiFinalLoser1))
  //   const teamRoundOf16Loser4 = roundOf16Matches.filter(match => match.teams.includes(teamQuarterFinalLoser2))
  //   const teamRoundOf16Loser5 = roundOf16Matches.filter(match => match.teams.includes(teamRunnerUp))
  //   const teamRoundOf16Loser6 = roundOf16Matches.filter(match => match.teams.includes(teamQuarterFinalLoser3))
  //   const teamRoundOf16Loser7 = roundOf16Matches.filter(match => match.teams.includes(teamSemiFinalLoser2))
  //   const teamRoundOf16Loser8 = roundOf16Matches.filter(match => match.teams.includes(teamQuarterFinalLoser4))
  
  //   const sortedRoundOf16: WorldCupMatch[] = [
  //     ...teamRoundOf16Loser1,
  //     ...teamRoundOf16Loser2,
  //     ...teamRoundOf16Loser3,
  //     ...teamRoundOf16Loser4,
  //     ...teamRoundOf16Loser5,
  //     ...teamRoundOf16Loser6,
  //     ...teamRoundOf16Loser7,
  //     ...teamRoundOf16Loser8,
  //   ]
  
  //   const roundOf16MatchesWithChangeScore = changeScoreMatchesReplay(sortedRoundOf16)
  //   const roundOf16MatchesWithoutReplay = deleteMatchesReplay(roundOf16MatchesWithChangeScore)

  //   playoffGrid.push( finalMatches, 
  //                     thirdPlaceMatches, 
  //                     semiFinalsMatches,
  //                     quarterFinalsMatchesWithoutReplay,
  //                     roundOf16MatchesWithoutReplay )
  // }

  return playoffGrid
}

// Функция удаляет матчи переигровки для формирования в последующем сетки play-off
const deleteMatchesReplay = (matches: WorldCupMatch[]) => {
  return matches.filter(match => match.date.split(' ')[1] !== 'REPLAY')
}

// Функция замены счета матча с учетом переигровки
const changeScoreMatchesReplay = (matches: WorldCupMatch[]) => {
  const matchesStage = structuredClone(matches);

  matchesStage.forEach((match, index) => {
    if(match.date.split(' ')[1] === 'REPLAY') {
      matchesStage[index - 1].score = [...matchesStage[index - 1].score, ...match.score]
      match.score = []
    }
  })

  return matchesStage
}

