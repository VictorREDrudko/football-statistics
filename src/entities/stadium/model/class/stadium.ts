import { v1 } from 'uuid'
import { LocationStadium, Stadium, StadiumName } from '../types'

export class StadiumEntity implements Stadium {
  readonly id: string
  readonly location: LocationStadium
  readonly names: StadiumName[]
  readonly isActive: boolean
  readonly capacity: string
  readonly openedYear: string
  readonly renovatedYears: string[]
  readonly homeTeams: string[]

  constructor(
    location: LocationStadium,
    names: StadiumName[],
    isActive: boolean,
    capacity: string,
    openedYear: string,
    renovatedYears: string[] = [],
    homeTeams: string[] = []
  ) {
    this.id = v1()
    this.location = location
    this.names = names
    this.isActive = isActive
    this.capacity = capacity
    this.openedYear = openedYear
    this.renovatedYears = renovatedYears
    this.homeTeams = homeTeams
  }
}
