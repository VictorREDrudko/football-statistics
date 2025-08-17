import { worldCupLogo1970 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { finalStageMatches1970 } from '../final-stage/finalStageMatches1970'
import {
  backgroundWorldCup1970_1,
  backgroundWorldCup1970_2,
} from '@/shared/assets/backgrounds'
import { worldCupLogoForCard1970 } from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1970: ChampionshipInfo = {
  id: '9-world-cup',
  title: '1970 FIFA World Cup',
  date: '31 May - 21 June 1970',
  logo: {
    forCard: worldCupLogoForCard1970,
    origin: worldCupLogo1970,
  },
  background: [backgroundWorldCup1970_1, backgroundWorldCup1970_2],
  hostCountry: ['Mexico'],
  finalStage: finalStageMatches1970,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
