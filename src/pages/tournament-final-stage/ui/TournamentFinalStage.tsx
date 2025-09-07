import { useParams } from 'react-router-dom'
import { NationalChampionship } from '@/widgets'
import { nationalTournamentStore } from '@/shared/model/national-tournaments-store/nationalTournamentStore'
import { ChampionshipInfo, NationalTournaments } from '@/shared/model/national-tournaments-store/types'
import { NoData } from '@/shared/ui/no-data/NoData'

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
