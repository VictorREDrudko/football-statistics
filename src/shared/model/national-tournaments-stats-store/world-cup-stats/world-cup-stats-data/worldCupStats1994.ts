import { ChampionshipStats } from '../../types'
import { createChampionshipStats } from '../../createChampionshipStats'
import { finalStageMatches1994 } from '@/shared/model/national-tournaments-store/world-cup'

export const worldCupStats1994: ChampionshipStats = {
  qualificationStats: '',
  finalStageStats: createChampionshipStats(finalStageMatches1994),
}