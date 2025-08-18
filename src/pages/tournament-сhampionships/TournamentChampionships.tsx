import { useParams } from 'react-router-dom'
import { ChampionshipCard } from '@/entities'
import { Heading, NoData } from '@/shared'
import { NationalTournaments, nationalTournamentStore } from '@/shared/model'
import s from './TournamentChampionships.module.scss'

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
