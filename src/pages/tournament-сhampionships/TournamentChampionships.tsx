import { useParams } from 'react-router-dom'
import { ChampionshipCard } from '@/entities'
import { NoData } from '@/shared'
import { NationalTournaments, nationalTournamentStore } from '@/shared/model'
import s from './TournamentChampionships.module.scss'

export const TournamentChampionships = () => {
  const { tournament } = useParams()

  const tournamentData =
    nationalTournamentStore[tournament as keyof NationalTournaments]

  const tournamentCards = tournamentData ? (
    Object.keys(tournamentData).map((year) => {
      return (
        <ChampionshipCard
          championship={tournamentData[year]}
          key={tournamentData[year].id}
        />
      )
    })
  ) : (
    <NoData
      message={'No tournament data available!'}
      textButton={'Back to tournaments list'}
    />
  )

  return <div className={s.container}>{tournamentCards}</div>
}
