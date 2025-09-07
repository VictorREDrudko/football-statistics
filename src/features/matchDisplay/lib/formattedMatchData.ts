import { FormattedMatchData, MatchScore } from '@/entities/match'
import { StadiumsData } from '@/entities/stadium'
import { Teams } from '@/entities/team'
import { Country } from '@/shared/types'

import { convertMatchScore } from './helpers/convertMatchScore'
import { getYearFromMatchDate } from './helpers/getYearFromMatchDate'
import { choiseStadionNameByYear } from './helpers/choiseStadionNameByYear'
import { formattedGoalsInfo } from './helpers/formatted-goals-info/formattedGoalsInfo'

import { getTeamsFlagsByYear } from './helpers/get-teams-flags-by-year/getTeamsFlagsByYear'
import { getIsRealTeams } from './helpers/getIsRealTeams'
import { MatchInfo } from '../model'
import { getTeamsNamesByYear } from './helpers/get-teams-names-by-year/getTeamsNamesByYear'

export const formattedMatchData = (
  match: MatchInfo,
  stadiumData: StadiumsData | undefined,
  teamsData: Teams
): FormattedMatchData => {
  const { teams, score, date, stage, goals, stadiumInfo, attendance } = match

  const year = getYearFromMatchDate(date)
  const matchScore: MatchScore = convertMatchScore(score)
  const matchGoalsInfo = formattedGoalsInfo(goals)

  const teamsNamesByYear = getTeamsNamesByYear(teams, teamsData, year)
  const teamsFlagsByYear = getTeamsFlagsByYear(teams, teamsData, year)
  const isRealTeams = getIsRealTeams(teams, teamsData)

  // If stadiumData = undefined
  let stadionName = 'Unknown Stadium'
  let country = 'Unknown' as Country
  let city = 'Unknown city'

  if (stadiumData) {
    const { stadiumKey } = stadiumInfo
    const { names, location } = stadiumData[stadiumKey]
    stadionName = choiseStadionNameByYear(names, year)
    country = location.country
    city = location.city
  }

  return {
    matchBasicInfo: {
      teams: teamsNamesByYear,
      flags: teamsFlagsByYear,
      score: matchScore,
      isRealTeams,
    },
    matchAdditionalInfo: {
      date,
      stage,
      goals: matchGoalsInfo,
    },
    matchStadiumInfo: {
      name: stadionName,
      country,
      city,
      attendance,
    },
  }
}
