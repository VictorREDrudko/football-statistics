import { ChampionshipfinalStageStats, ChampionshipInfo } from '@/shared/model'
import { createChampionshipPosition } from './createChampionshipPosition'
import { ChampionshipStatsData } from '../model/types'

export const createChampionshipStatsData = (
  championshipData: ChampionshipInfo,
  stats: ChampionshipfinalStageStats
): ChampionshipStatsData => {
  const { date, hostCountry } = championshipData
  const { goals, matches, attendance, scorersStats, teamsStats } = stats

  const attendancePerMatch = Math.round(attendance / matches).toLocaleString(
    'ru-RU'
  )
  const scorers = scorersStats.filter(
    (player) => player.goals === scorersStats[0].goals
  )

  return {
    hostCountries: hostCountry,
    dates: date,
    finalPositions: createChampionshipPosition(teamsStats),
    teams: Object.keys(teamsStats).length,
    matches: matches,
    goals: goals,
    goalsPerMatch: +(goals / matches).toFixed(2),
    attendance: attendance.toLocaleString('ru-RU'),
    attendancePerMatch: attendancePerMatch,
    scorers: scorers,
    teamsQualification: 0,
  }
}
