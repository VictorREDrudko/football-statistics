import { NationalTournaments } from './types'
import { worldCupStore } from './world-cup/worldCupStore'

export const nationalTournamentStore: NationalTournaments = {
  'world-cup': worldCupStore,
}
