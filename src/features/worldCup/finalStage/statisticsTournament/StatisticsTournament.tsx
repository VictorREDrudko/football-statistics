import { WorldCupInfo } from 'data/worldCupData/type-worldCupData'
import s from './StatisticsTournament.module.css'
import { TournamentHeader } from './tournamentHeader/TournamentHeader'
import { TournamentInfo } from './tournamentInfo/TournamentInfo'

type Props = {
  tournamentData: WorldCupInfo
}

export const StatisticsTournament = ({tournamentData} : Props) => {
  return(
    <div className={s.container}>
      <TournamentHeader title={tournamentData.title} image={tournamentData.icon}/>
      <TournamentInfo dataTournament={tournamentData}/>
    </div>
  )
}