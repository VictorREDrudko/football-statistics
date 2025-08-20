import { ChampionshipStats } from '../../types'
import { createChampionshipStats } from '../../createChampionshipStats'
import { finalStageMatches1990 } from '@/shared/model/national-tournaments-store/world-cup'

export const worldCupStats1990: ChampionshipStats = {
  qualificationStats: '',
  finalStageStats: createChampionshipStats(finalStageMatches1990),
}