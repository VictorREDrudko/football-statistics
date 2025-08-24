import { Team } from '@/entities/team'
import { Country } from '@/shared/types/country'

export interface NationalTeamsState {
  teams: Partial<Record<Country, Team>>
  isLoading: boolean
  error: string | null
}

export type NationalTeamsMap = Record<Country, Team>