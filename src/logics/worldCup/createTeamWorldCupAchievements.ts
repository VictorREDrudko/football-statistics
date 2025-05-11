import { WorldCupData } from '../../data/worldCupData/type-worldCupData'
import { stage } from '../../data/worldCupData/worldCupData'

export type TeamWorldCupAchievements = {
  countFirstPlace: number
  yearsFirstPlace: string[]
  countSecondPlace: number
  yearsSecondPlace: string[]
  countThirdPlace: number
  yearsThirdPlace: string[]
  countMatches: number
  countMatchesWins: number
  countMatchesLost: number
  countMatchesDrawn: number
  countAppearances: number
  yearsAppearances: string[]
}

export const createTeamWorldCupAchievements = (
  championshipData: WorldCupData,
  countryName: string
): TeamWorldCupAchievements => {
  let countFirstPlace = 0
  const yearsFirstPlace: string[] = []

  let countSecondPlace = 0
  const yearsSecondPlace: string[] = []

  let countThirdPlace = 0
  const yearsThirdPlace: string[] = []

  let countMatches = 0
  let countMatchesWins = 0
  let countMatchesLost = 0
  let countMatchesDrawn = 0

  let countAppearances = 0
  const yearsAppearances: string[] = []

  // Получаем список годов проведения финальных стадий чемпионата мира
  const yearsTournaments = Object.keys(championshipData)

  yearsTournaments.forEach((year) => {
    // участие команды в турнире
    let isAppearances = false

    championshipData[year].finalStage.forEach((match) => {
      const index = match.teams.indexOf(countryName)

      // ранний выход если команда в матче не учавствовала
      if (index === -1) return

      // отмечаем участие команды в турнире
      if (!isAppearances) {
        isAppearances = true
        countAppearances++
        yearsAppearances.push(year)
      }

      countMatches++
      // деструктуризация массива
      const [fullTimeScore, extraTimeScore, penaltiScore] = match.score

      // команда идет первой
      const isFirstTeam = index === 0
      // игра окончена в осн. время
      const isRegularTime = extraTimeScore.length === 0
      //игра окончена в доп время (без пенальти)
      const isExtraTime = extraTimeScore.length !== 0 && penaltiScore.length === 0
      // игра окончена по пенальти
      const isPenalty = penaltiScore.length !== 0

      if (isRegularTime) {
        const [ourScore, opponentScore] = isFirstTeam
          ? [fullTimeScore[0], fullTimeScore[1]]
          : [fullTimeScore[1], fullTimeScore[0]]

        if (ourScore > opponentScore) {
          countMatchesWins++
          // отмечаем если это финал или матч за 3 место
          if (match.stage === stage.final || match.stage === stage.group.finalGroup.final) {
            countFirstPlace++
            yearsFirstPlace.push(year)
          }

          if (match.stage === stage.place3 || match.stage === stage.group.finalGroup.place3) {
            countThirdPlace++
            yearsThirdPlace.push(year)
          }
        } else if (ourScore < opponentScore) {
          countMatchesLost++

          if (match.stage === stage.final || match.stage === stage.group.finalGroup.final) {
            countSecondPlace++
            yearsSecondPlace.push(year)
          }
        } else countMatchesDrawn++
      } else if (isExtraTime) {
        const team1Goals = fullTimeScore[0] + extraTimeScore[0]
        const team2Goals = fullTimeScore[1] + extraTimeScore[1]
        const [ourScore, opponentScore] = isFirstTeam ? [team1Goals, team2Goals] : [team2Goals, team1Goals]

        if (ourScore > opponentScore) {
          countMatchesWins++

          if (match.stage === stage.final || match.stage === stage.group.finalGroup.final) {
            countFirstPlace++
            yearsFirstPlace.push(year)
          }

          if (match.stage === stage.place3 || match.stage === stage.group.finalGroup.place3) {
            countThirdPlace++
            yearsThirdPlace.push(year)
          }
        } else if (ourScore < opponentScore) {
          countMatchesLost++

          if (match.stage === stage.final || match.stage === stage.group.finalGroup.final) {
            countSecondPlace++
            yearsSecondPlace.push(year)
          }
        } else countMatchesDrawn++
      } else if (isPenalty) {
        const [ourScore, opponentScore] = isFirstTeam
          ? [penaltiScore[0], penaltiScore[1]]
          : [penaltiScore[1], penaltiScore[0]]

        if (ourScore > opponentScore) {
          countMatchesWins++

          if (match.stage === stage.final || match.stage === stage.group.finalGroup.final) {
            countFirstPlace++
            yearsFirstPlace.push(year)
          }

          if (match.stage === stage.place3 || match.stage === stage.group.finalGroup.place3) {
            countThirdPlace++
            yearsThirdPlace.push(year)
          }
        } else if (ourScore < opponentScore) {
          countMatchesLost++

          if (match.stage === stage.final || match.stage === stage.group.finalGroup.final) {
            countSecondPlace++
            yearsSecondPlace.push(year)
          }
        }
      }
    })
  })

  return {
    countFirstPlace,
    yearsFirstPlace,
    countSecondPlace,
    yearsSecondPlace,
    countThirdPlace,
    yearsThirdPlace,
    countMatches,
    countMatchesWins,
    countMatchesLost,
    countMatchesDrawn,
    countAppearances,
    yearsAppearances,
  }
}
