import { StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

export type StadiumsState = {
  stadiumsData: Partial<Record<Country, StadiumsData>>
}
