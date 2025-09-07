
import { MatchInfo } from '@/features/matchDisplay'
import { TableData, TeamTableData } from '../model/types'
import { getTeamsNameFromMatches } from './getTeamsNameFromMatches'

export const createGroupTableData = (
  qualifiedTeams: string[],
  matches: MatchInfo[]
): TeamTableData[] => {
  const teamNames: string[] = getTeamsNameFromMatches(matches)
  const tableData: TableData = {}
  const teamsDataByGroup: TeamTableData[] = []

  teamNames.map((countryName) => {
    tableData[countryName] = {
      position: 0,
      team: countryName,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalsDifference: 0,
      points: 0,
      qualification: '',
      pointsByDate: false,
    }
  })

  matches.forEach((match) => {
    const [team1, team2] = match.teams
    const [goalsTeam1, goalsTeam2] = match.score[0]
    const [goalsTeam1et, goalsTeam2et] = match.score[1]
    const [goalsTeam1pen, goalsTeam2pen] = match.score[1]
    const totalGoalsTeam1 = goalsTeam1 + goalsTeam1et
    const totalGoalsTeam2 = goalsTeam2 + goalsTeam2et
    const isExtraTime = match.score[1].length > 0
    const isPenalty = match.score[2].length > 0

    // did the match take place?
    if (match.score[0].length > 0) {
      tableData[team1].played++
      tableData[team1].goalsFor += isExtraTime ? totalGoalsTeam1 : goalsTeam1
      tableData[team1].goalsAgainst += isExtraTime
        ? totalGoalsTeam2
        : goalsTeam2
      tableData[team2].played++
      tableData[team2].goalsFor += isExtraTime ? totalGoalsTeam2 : goalsTeam2
      tableData[team2].goalsAgainst += isExtraTime
        ? totalGoalsTeam1
        : goalsTeam1

      if (match.score[1].length === 0) {
        if (goalsTeam1 > goalsTeam2) {
          tableData[team1].won++
          tableData[team2].lost++
        }
        if (goalsTeam1 < goalsTeam2) {
          tableData[team1].lost++
          tableData[team2].won++
        }
        if (goalsTeam1 === goalsTeam2) {
          tableData[team1].drawn++
          tableData[team2].drawn++
        }
      }

      if (isExtraTime && !isPenalty) {
        if (totalGoalsTeam1 > totalGoalsTeam2) {
          tableData[team1].won++
          tableData[team2].lost++
        }
        if (totalGoalsTeam1 < totalGoalsTeam2) {
          tableData[team1].lost++
          tableData[team2].won++
        }
        if (totalGoalsTeam1 === totalGoalsTeam2) {
          tableData[team1].drawn++
          tableData[team2].drawn++
        }
      }

      if (isExtraTime && isPenalty) {
        if (totalGoalsTeam1 + goalsTeam1pen > totalGoalsTeam2 + goalsTeam2pen) {
          tableData[team1].won++
          tableData[team2].lost++
        }
        if (totalGoalsTeam1 + goalsTeam1pen < totalGoalsTeam2 + goalsTeam2pen) {
          tableData[team1].lost++
          tableData[team2].won++
        }
      }

      tableData[team1].pointsByDate = Number(match.date.slice(-4)) <= 1981
    }
  })

  // add goalsDifference, points and qualification
  teamNames.map((countryName) => {
    const team = tableData[countryName]

    team.goalsDifference = team.goalsFor - team.goalsAgainst

    team.qualification = qualifiedTeams.includes(team.team, 0) ? '+' : ''

    team.points = team.pointsByDate
      ? team.won * 2 + team.drawn * 1
      : team.won * 3 + team.drawn * 1

    teamsDataByGroup.push(team)
  })

  // Sort
  teamsDataByGroup.sort((a, b) => {
    if (a.points === b.points) {
      if (a.played !== b.played) {
        return a.played < b.played ? -1 : 1
      }

      if (a.goalsDifference === b.goalsDifference) {
        return a.goalsFor > b.goalsFor ? -1 : 1
      }
      return a.goalsDifference > b.goalsDifference ? -1 : 1
    }
    return a.points > b.points ? -1 : 1
  })

  // Position
  const result = teamsDataByGroup.map((teamData, index) => {
    teamData.position = index + 1
    return teamData
  })

  return result
}
