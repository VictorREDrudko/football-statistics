import { ChampionshipStats } from '../../types'
import { createChampionshipStats } from '../../createChampionshipStats'
import { finalStageMatches1950 } from '@/shared/model/national-tournaments-store/world-cup'

export const worldCupStats1950: ChampionshipStats = {
  qualificationStats: '',
  finalStageStats: createChampionshipStats(finalStageMatches1950),
}