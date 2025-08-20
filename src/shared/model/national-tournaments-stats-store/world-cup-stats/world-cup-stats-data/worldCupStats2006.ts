import { ChampionshipStats } from '../../types'
import { createChampionshipStats } from '../../createChampionshipStats'
import { finalStageMatches2006 } from '@/shared/model/national-tournaments-store/world-cup'

export const worldCupStats2006: ChampionshipStats = {
  qualificationStats: '',
  finalStageStats: createChampionshipStats(finalStageMatches2006),
}