import { ChampionshipStats } from '../../types'
import { createChampionshipStats } from '../../createChampionshipStats'
import { finalStageMatches2002 } from '@/shared/model/national-tournaments-store/world-cup'

export const worldCupStats2002: ChampionshipStats = {
  qualificationStats: '',
  finalStageStats: createChampionshipStats(finalStageMatches2002),
}