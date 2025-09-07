import { Country } from '@/shared/types'
import { MatchStadiumInfo } from '../model/types'

export const getStadium = (
  country: Country,
  stadiumKey: string
): MatchStadiumInfo => {
  return { country, stadiumKey }
}
