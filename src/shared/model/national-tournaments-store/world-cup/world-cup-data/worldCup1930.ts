import { worldCupLogo1930 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { finalStageMatches1930 } from '../final-stage/finalStageMatches1930'
import {
  backgroundWorldCup1930_1,
  backgroundWorldCup1930_2,
} from '@/shared/assets/backgrounds'
import { worldCupLogoForCard1930 } from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model'

export const worldCup1930: ChampionshipInfo = {
  id: '1-world-cup',
  title: '1930 FIFA World Cup',
  date: '13-30 July 1930',
  logo: {
    forCard: worldCupLogoForCard1930,
    origin: worldCupLogo1930,
  },
  background: [backgroundWorldCup1930_1, backgroundWorldCup1930_2],
  hostCountry: ['Uruguay'],
  finalStage: finalStageMatches1930,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
