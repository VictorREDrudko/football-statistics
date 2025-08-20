import { worldCupLogo1966 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import {
  backgroundWorldCup1966_1,
  backgroundWorldCup1966_2,
} from '@/shared/assets/backgrounds'
import { finalStageMatches1966 } from '../final-stage/finalStageMatches1966'
import {
  worldCupLogoForCard1966,
  worldCupLogoWithoutBackground1966,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1966: ChampionshipInfo = {
  id: '8-world-cup',
  title: '1966 FIFA World Cup',
  date: '11-30 July 1966',
  logo: {
    forCard: worldCupLogoForCard1966,
    origin: worldCupLogo1966,
    withoutBackground: worldCupLogoWithoutBackground1966,
  },
  background: [backgroundWorldCup1966_1, backgroundWorldCup1966_2],
  hostCountry: ['England'],
  finalStage: finalStageMatches1966,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
