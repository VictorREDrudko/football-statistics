import { ChampionshipStats } from '../../types'
import { createChampionshipStats } from '../../createChampionshipStats'
import { finalStageMatches1970 } from '@/shared/model/national-tournaments-store/world-cup'

export const worldCupStats1970: ChampionshipStats = {
  qualificationStats: '',
  finalStageStats: createChampionshipStats(finalStageMatches1970),
}