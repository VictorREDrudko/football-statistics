import s from './StatisticsTournament.module.scss'
import { TournamentInfo } from "@/shared"
import { TournamentHeader } from './tournament-header/TournamentHeader'
import { TournamentMainInfo } from './tournament-main-info/TournamentMainInfo'
import { ConfederationCode } from '@/entities'

type Props = {
  tournamentData: TournamentInfo
  organizationCode: ConfederationCode
  year: string
}

export const StatisticsTournament = ({tournamentData, organizationCode, year} : Props) => {
  return(
    <div className={s.container}>
      <TournamentHeader titleTournament={tournamentData.title} 
                        logoTournamentPath={tournamentData.icon}
      />
      <TournamentMainInfo dataTournament={tournamentData}
                          organizationCode={organizationCode}
                          year={year}
      />
    </div>
  )
}