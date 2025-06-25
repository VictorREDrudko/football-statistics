import { worldCupLogo1978 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import {
  backgroundWorldCup1978_1,
  backgroundWorldCup1978_2,
  backgroundWorldCup1978_3,
} from '@/shared/assets/backgrounds'
import { finalStageMatches1978 } from '../final-stage/finalStageMatches1978'

export const worldCup1978: TournamentInfo = {
  id: '11-world-cup',
  title: '1978 FIFA World Cup',
  date: '1-25 June 1978',
  logo: worldCupLogo1978,
  background: [backgroundWorldCup1978_1, backgroundWorldCup1978_2, backgroundWorldCup1978_3],
  hostCountry: ['Argentina'],
  finalStage: finalStageMatches1978,
  qualification: [],
}
