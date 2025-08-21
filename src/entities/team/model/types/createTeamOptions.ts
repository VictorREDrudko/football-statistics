import { ConfederationCode } from '@/entities/team/model/types'
import { Country } from '@/shared/types'

export type CreateTeamOptions = {
  confederation: ConfederationCode
  country: Country
  names: Array<{ name: Country; period: string }>
  flagsPeriod: string[]
  founded: string
  fifa: string
  confederationDate: string
}
