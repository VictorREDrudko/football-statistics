import { TournamentInfo } from '@/shared'
import s from './TournamentMainInfo.module.scss'
import { ConfederationCode } from '@/entities'
import { HostCountry } from './host-country/HostCountry'
import { DateChampionship } from './date-championship/DateChampionship'
import { TeamsChampionship } from './teams-championship/TeamsChampionship'
import { stats } from '@/entities/national-team/model/confederationData'
import { MatchesChampionship } from './matches-championship/MatchesChampionship'
import { GoalsChampionship } from './goals-championship/GoalsChampionship'
import { AttendanceChampionship } from './attendance-championship/AttendanceChampionship'
import { TopScorers } from './top-scorers/TopScorers'
import { Positions } from './Positions/Positions'
import { FinalPositions } from '@/widgets/tournament-details/model/types'

type Props = {
  dataTournament: TournamentInfo
  organizationCode: ConfederationCode
  year: string
}

export const TournamentMainInfo = ({dataTournament, organizationCode, year} : Props) => {
  const tournamentTitle = dataTournament.title.replace(/^\d{4}/, "").trim()
  const statsChampionship = stats[organizationCode][tournamentTitle].finalStageStats[year]
  const teamsQualification = 0
  const teamsFinalStage = Object.keys(statsChampionship.statsTeams).length
  const matches = statsChampionship.statsGeneral.matches
  const goals = statsChampionship.statsGeneral.goals
  const goalsPerMatch = +(goals / matches).toFixed(2)
  const attendance = statsChampionship.statsGeneral.attendance.toLocaleString("ru-RU")
  const attendancePerMatch = (Math.round(statsChampionship.statsGeneral.attendance / matches)).toLocaleString("ru-RU")
  const scorers = statsChampionship.statsScorers.filter(player => player.goals === statsChampionship.statsScorers[0].goals)

  const finalPositions: FinalPositions = {
    champions: '',
    runnersUp: '',
    thirdPlace: '',
    fourthPlace: ''
  }

  Object.keys(statsChampionship.statsTeams).forEach(countryName => {
    if (statsChampionship.statsTeams[countryName].result.champion) {
      finalPositions.champions = countryName
    }
    if (statsChampionship.statsTeams[countryName].result.secondPlace) {
      finalPositions.runnersUp = countryName
    }
    if (statsChampionship.statsTeams[countryName].result.thirdPlace) {
      finalPositions.fourthPlace = countryName
    }
    if (statsChampionship.statsTeams[countryName].result.fourthPlace) {
      finalPositions.fourthPlace = countryName
    }
  })

  return(
    <div className={s.container}>
      <span className={s.title}>Tournament details:</span>
      <div className={s.containerParameters}>
        <HostCountry countryNames={dataTournament.hostCountry} year={year}/>
        <DateChampionship date={dataTournament.date}/>
        <Positions positions={finalPositions} year={year}/>
        <TeamsChampionship teamsQualification={teamsQualification} teamsFinalStage={teamsFinalStage}/>
        <MatchesChampionship matches={matches}/>
        <GoalsChampionship goals={goals} goalsPerMatch={goalsPerMatch}/>
        <AttendanceChampionship attendance={attendance} attendancePerMatch={attendancePerMatch}/>
        <TopScorers scorers={scorers} year={year}/>
      </div>
    </div>
  )
}