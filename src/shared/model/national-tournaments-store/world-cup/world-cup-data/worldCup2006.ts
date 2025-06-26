import { worldCupLogo2006 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { backgroundWorldCup2006_1, backgroundWorldCup2006_2 } from '@/shared/assets/backgrounds'
import { finalStageMatches2006 } from '../final-stage/finalStageMatches2006'

export const worldCup2006: TournamentInfo = {
  id: '18-world-cup',
  title: '2006 FIFA World Cup',
  date: '9 June - 9 July 2006',
  logo: worldCupLogo2006,
  background: [backgroundWorldCup2006_1, backgroundWorldCup2006_2],
  hostCountry: ['Germany'],
  finalStage: finalStageMatches2006,
  qualification: [],
}
