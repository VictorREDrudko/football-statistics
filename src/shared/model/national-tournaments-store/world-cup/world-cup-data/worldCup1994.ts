import { worldCupLogo1994 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { finalStageMatches1994 } from '../final-stage/finalStageMatches1994'
import {
  backgroundWorldCup1994_1,
  backgroundWorldCup1994_2,
} from '@/shared/assets/backgrounds'
import {
  worldCupLogoForCard1994,
  worldCupLogoWithoutBackground1994,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1994: ChampionshipInfo = {
  id: '15-world-cup',
  title: '1994 FIFA World Cup',
  date: '17 June- 17 July 1994',
  logo: {
    forCard: worldCupLogoForCard1994,
    origin: worldCupLogo1994,
    withoutBackground: worldCupLogoWithoutBackground1994,
  },
  background: [backgroundWorldCup1994_1, backgroundWorldCup1994_2],
  hostCountry: ['United States'],
  finalStage: finalStageMatches1994,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
