import { v1 } from 'uuid'
import { LocationAndNamesStadium } from '../types'

export class Stadium {
  id: string
  locationAndNames: LocationAndNamesStadium
  isActive: boolean
  capacity: string
  openedYear: string
  renovated: string[]
  homeTeam: string[]
  imageUrl: string[]

  constructor(
    locationAndNames: LocationAndNamesStadium,
    isActive: boolean,
    capacity: string,
    openedYear: string,
    renovated: string[],
    homeTeam: string[],
    imageUrl: string[]
  ) {
    this.id = v1()
    this.locationAndNames = locationAndNames
    this.isActive = isActive
    this.capacity = capacity
    this.openedYear = openedYear
    this.renovated = renovated
    this.homeTeam = homeTeam
    this.imageUrl = imageUrl
  }
}
