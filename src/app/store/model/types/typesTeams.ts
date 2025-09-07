import { Team } from '@/entities/team'
import { Country } from '@/shared/types'

export type NationalTeamsState = {
  teamsData: Partial<Record<Country, Team>>
}
