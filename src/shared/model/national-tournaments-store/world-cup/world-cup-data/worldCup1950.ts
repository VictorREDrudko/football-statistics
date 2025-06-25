import { worldCupLogo1950 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { finalStageMatches1950 } from '../final-stage/finalStageMatches1950'
import { backgroundWorldCup1950_1, backgroundWorldCup1950_2 } from '@/shared/assets/backgrounds'

export const worldCup1950: TournamentInfo = {
  id: '4-world-cup',
  title: '1950 FIFA World Cup',
  date: '24 June - 16 July 1950',
  logo: worldCupLogo1950,
  background: [backgroundWorldCup1950_1, backgroundWorldCup1950_2],
  hostCountry: ['Brazil'],
  finalStage: finalStageMatches1950,
  qualification: [],
}
