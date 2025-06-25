import { worldCupLogo1930 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { finalStageMatches1930 } from '../final-stage/finalStageMatches1930'
import { backgroundWorldCup1930_1, backgroundWorldCup1930_2 } from '@/shared/assets/backgrounds'

export const worldCup1930: TournamentInfo = {
  id: '1-world-cup',
  title: '1930 FIFA World Cup',
  date: '13-30 July 1930',
  logo: worldCupLogo1930,
  background: [backgroundWorldCup1930_1, backgroundWorldCup1930_2],
  hostCountry: ['Uruguay'],
  finalStage: finalStageMatches1930,
  qualification: [],
}
