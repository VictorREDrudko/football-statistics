import { worldCupLogo1930 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { finalStageMatches1930 } from '../final-stage/finalStageMatches1930'
import {
  backgroundWorldCup1930_stadion,
  backgroundWorldCup1930_goal,
} from '@/shared/assets/backgrounds'
import {
  worldCupLogoForCard1930,
  worldCupLogoWithoutBackground1930,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model'

export const worldCup1930: ChampionshipInfo = {
  id: '1-world-cup',
  title: '1930 FIFA World Cup',
  date: '13-30 July 1930',
  logo: {
    forCard: worldCupLogoForCard1930,
    origin: worldCupLogo1930,
    withoutBackground: worldCupLogoWithoutBackground1930,
  },
  background: {
    groupRound: backgroundWorldCup1930_goal,
    knockoutRound: backgroundWorldCup1930_stadion,
  },
  hostCountry: ['Uruguay'],
  finalStage: finalStageMatches1930,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
