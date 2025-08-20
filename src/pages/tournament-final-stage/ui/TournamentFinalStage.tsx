import { useParams } from 'react-router-dom'
import { NationalChampionship } from '@/widgets'
import { NoData } from '@/shared'
import {
  ChampionshipInfo,
  NationalTournaments,
  nationalTournamentStore,
} from '@/shared/model'

export const TournamentFinalStage = () => {
  const { tournament, urlYear } = useParams<{
    tournament: string
    urlYear: string
  }>()

  if (!urlYear) {
    return <NoData message={'Invalid tournament or year'} />
  }

  const championshipData: ChampionshipInfo =
    nationalTournamentStore[tournament as keyof NationalTournaments][urlYear]

  return <NationalChampionship championshipData={championshipData} />
}
