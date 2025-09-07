import { createChampionshipStatsData } from '@/features'

import s from './ChampionshipMainInfo.module.scss'

import { ChampionshipHostCountry, ChampionshipDate, ChampionshipPosition, ChampionshipTeams, ChampionshipMatches, ChampionshipGoals, ChampionshipAttendance, ChampionshipTopScorers } from '@/entities/championship-parameter'
import { ChampionshipParameter } from '@/entities/championship-parameter/ChampionshipParameter'
import { championshipIndicators } from '@/shared/model/championship-indicators/championshipIndicators'
import { Indicator } from '@/shared/model/championship-indicators/types'
import { nationalTournamentStatsStore } from '@/shared/model/national-tournaments-stats-store/nationalTournamentStatsStore'
import { NationalTournamentsStats } from '@/shared/model/national-tournaments-stats-store/types'
import { ChampionshipInfo } from '@/shared/model/national-tournaments-store/types'

type Props = {
  championshipData: ChampionshipInfo
  year: string
}

export const ChampionshipMainInfo = ({ championshipData, year }: Props) => {
  const tournamentPath = championshipData.info.path
  const keyTournament = tournamentPath.replace(
    /^.*\//,
    ''
  ) as keyof NationalTournamentsStats

  const finalStageStats =
    nationalTournamentStatsStore[keyTournament][year].finalStageStats
  const indicators: Indicator[] = championshipIndicators[keyTournament]

  const data = createChampionshipStatsData(championshipData, finalStageStats)

  const mappedIndicators = indicators.map((parameter, index) => {
    const { icon, indicator } = parameter

    const renderContent = () => {
      switch (indicator) {
        case 'Host countries:':
          return (
            <ChampionshipHostCountry
              countryNames={data.hostCountries}
              year={year}
            />
          )

        case 'Dates:':
          return <ChampionshipDate date={data.dates} />

        case 'Final positions:':
          return (
            <ChampionshipPosition positions={data.finalPositions} year={year} />
          )

        case 'Teams:':
          return (
            <ChampionshipTeams
              teamsQualification={data.teamsQualification}
              teamsFinalStage={data.teams}
            />
          )

        case 'Matches played:':
          return <ChampionshipMatches matches={data.matches} />

        case 'Goals scored:':
          return (
            <ChampionshipGoals
              goals={data.goals}
              goalsPerMatch={data.goalsPerMatch}
            />
          )

        case 'Attendance:':
          return (
            <ChampionshipAttendance
              attendance={data.attendance}
              attendancePerMatch={data.attendancePerMatch}
            />
          )

        case 'Top scorer(s):':
          return <ChampionshipTopScorers scorers={data.scorers} year={year} />

        default:
          return null
      }
    }

    return (
      <ChampionshipParameter key={index} icon={icon} indicator={indicator}>
        {renderContent()}
      </ChampionshipParameter>
    )
  })

  return (
    <div className={s.container}>
      <span className={s.title}>Tournament details:</span>
      <div className={s.containerParameters}>{mappedIndicators}</div>
    </div>
  )
}
