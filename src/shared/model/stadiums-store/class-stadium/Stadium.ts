import { TitlesStadium } from '../types'

export class Stadium {
  titles: TitlesStadium[]
  isActive: boolean
  city: string
  capacity: string
  builtYear: string[]
  homeTeam: string[]
  imageUrl: string

  constructor(
    titles: TitlesStadium[],
    city: string,
    capacity: string,
    builtYear: string[],
    {
      isActive = true,
      homeTeam = [''],
      imageUrl = '',
    }: {
      isActive?: boolean
      homeTeam?: string[]
      imageUrl?: string
    } = {} // дефолтный пустой объект
  ) {
    this.titles = titles
    this.isActive = isActive
    this.city = city
    this.capacity = capacity
    this.builtYear = builtYear
    this.homeTeam = homeTeam
    this.imageUrl = imageUrl
  }
}
