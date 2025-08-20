import { worldCupLogo1962 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { backgroundWorldCup1962_2 } from '@/shared/assets/backgrounds'
import { finalStageMatches1962 } from '../final-stage/finalStageMatches1962'
import {
  worldCupLogoForCard1962,
  worldCupLogoWithoutBackground1962,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1962: ChampionshipInfo = {
  id: '7-world-cup',
  title: '1962 FIFA World Cup',
  date: '30 May - 17 June 1962',
  logo: {
    forCard: worldCupLogoForCard1962,
    origin: worldCupLogo1962,
    withoutBackground: worldCupLogoWithoutBackground1962,
  },
  background: [backgroundWorldCup1962_2],
  hostCountry: ['Chile'],
  finalStage: finalStageMatches1962,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
