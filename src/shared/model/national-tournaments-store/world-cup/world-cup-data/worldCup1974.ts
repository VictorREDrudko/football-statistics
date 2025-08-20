import { worldCupLogo1974 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { finalStageMatches1974 } from '../final-stage/finalStageMatches1974'
import {
  backgroundWorldCup1974_1,
  backgroundWorldCup1974_2,
  backgroundWorldCup1974_3,
} from '@/shared/assets/backgrounds'
import { worldCupLogoForCard1974, worldCupLogoWithoutBackground1974 } from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1974: ChampionshipInfo = {
  id: '10-world-cup',
  title: '1974 FIFA World Cup',
  date: '13 June - 7 July 1974',
  logo: {
    forCard: worldCupLogoForCard1974,
    origin: worldCupLogo1974,
    withoutBackground: worldCupLogoWithoutBackground1974
  },
  background: [
    backgroundWorldCup1974_1,
    backgroundWorldCup1974_2,
    backgroundWorldCup1974_3,
  ],
  hostCountry: ['Germany'],
  finalStage: finalStageMatches1974,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
