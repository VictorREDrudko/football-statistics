import { useParams } from 'react-router-dom'
import s from './TournamentChampionships.module.scss'
import { Heading } from '@/shared/ui/heading/Heading'
import { NoData } from '@/shared/ui/no-data/NoData'
import { ChampionshipCard } from '@/entities/championship-card/ui/ChampionshipCard'
import { NationalTournaments } from '@/shared/model/national-tournaments-store/types'
import { nationalTournamentStore } from '@/shared/model/national-tournaments-store/nationalTournamentStore'

export const TournamentChampionships = () => {
  const { tournament } = useParams()

  const tournamentData =
    nationalTournamentStore[tournament as keyof NationalTournaments]

  const championshipCards = tournamentData ? (
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

  return (
    <div className={s.wrapper}>
      <div>
        <Heading size="8" align="center" color="secondary">
          {tournament?.replace(/-/, ' ')}
        </Heading>
        <Heading size="3" align="center" color="gray">
          {'The World of Football Tournaments'}
        </Heading>
      </div>
      <div className={s.container}>{championshipCards}</div>
    </div>
  )
}
