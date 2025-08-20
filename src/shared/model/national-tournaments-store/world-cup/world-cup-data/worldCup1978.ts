import { worldCupLogo1978 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import {
  backgroundWorldCup1978_1,
  backgroundWorldCup1978_2,
  backgroundWorldCup1978_3,
} from '@/shared/assets/backgrounds'
import { finalStageMatches1978 } from '../final-stage/finalStageMatches1978'
import {
  worldCupLogoForCard1978,
  worldCupLogoWithoutBackground1978,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1978: ChampionshipInfo = {
  id: '11-world-cup',
  title: '1978 FIFA World Cup',
  date: '1-25 June 1978',
  logo: {
    forCard: worldCupLogoForCard1978,
    origin: worldCupLogo1978,
    withoutBackground: worldCupLogoWithoutBackground1978,
  },
  background: [
    backgroundWorldCup1978_1,
    backgroundWorldCup1978_2,
    backgroundWorldCup1978_3,
  ],
  hostCountry: ['Argentina'],
  finalStage: finalStageMatches1978,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
