import { worldCupLogo1998 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import {
  backgroundWorldCup1998_1,
  backgroundWorldCup1998_2,
} from '@/shared/assets/backgrounds'
import { finalStageMatches1998 } from '../final-stage/finalStageMatches1998'
import { worldCupLogoForCard1998 } from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1998: ChampionshipInfo = {
  id: '16-world-cup',
  title: '1998 FIFA World Cup',
  date: '10 June - 12 July 1998',
  logo: {
    forCard: worldCupLogoForCard1998,
    origin: worldCupLogo1998,
  },
  background: [backgroundWorldCup1998_1, backgroundWorldCup1998_2],
  hostCountry: ['France'],
  finalStage: finalStageMatches1998,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
