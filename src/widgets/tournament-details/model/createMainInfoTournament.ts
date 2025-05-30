import { ConfederationCode } from "@/entities"
import { TournamentInfo } from "@/shared"
import { createStats } from "@/shared/model/stats/createStats"
import { Stats } from "@/shared/model/stats/types"

export const createMainInfoTournament = ( organizationCode: ConfederationCode,  year: string, tournamentTitle: string, dataTournament: TournamentInfo) => {
  const stats: Stats = createStats()
  const statsChampionship = stats[organizationCode][tournamentTitle].finalStageStats[year]

  return (
    {
      hostCountry: {
        characteristic: 'Host country',
        value: dataTournament.hostCountry,
      },
      dates: {
        characteristic: 'Dates',
        value: dataTournament.date,
      },
      teamsQualification: {
        characteristic: 'Teams (qualification)',
        value: 0,
      },
      teamsFinalStage: {
        characteristic: 'Teams (final stage)',
        value: Object.keys(statsChampionship.statsTeams).length,
      },
      matches: {
        characteristic: 'Matches played',
        value: statsChampionship.statsGeneral.matches,
      },
      goals: {
        characteristic: 'Goals scored',
        value: statsChampionship.statsGeneral.goals,
      },
      attendance: {
        characteristic: 'Attendance',
        value: statsChampionship.statsGeneral.attendance,
      },
      scorers: {
        characteristic: 'Top scorer(s)',
        value: [],
      },
    }
  )
}