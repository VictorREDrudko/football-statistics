import { ChampionshipStats } from '../../types'
import { createChampionshipStats } from '../../createChampionshipStats'
import { finalStageMatches1966 } from '@/shared/model/national-tournaments-store/world-cup'

export const worldCupStats1966: ChampionshipStats = {
  qualificationStats: '',
  finalStageStats: createChampionshipStats(finalStageMatches1966),
}