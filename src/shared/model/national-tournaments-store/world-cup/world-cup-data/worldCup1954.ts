import { worldCupLogo1954 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { finalStageMatches1954 } from '../final-stage/finalStageMatches1954'
import { backgroundWorldCup1954_1, backgroundWorldCup1954_2 } from '@/shared/assets/backgrounds'

export const worldCup1954: TournamentInfo = {
  id: '5-world-cup',
  title: '1954 FIFA World Cup',
  date: '16 June - 4 July 1954',
  logo: worldCupLogo1954,
  background: [backgroundWorldCup1954_1, backgroundWorldCup1954_2],
  hostCountry: ['Switzerland'],
  finalStage: finalStageMatches1954,
  qualification: [],
}
