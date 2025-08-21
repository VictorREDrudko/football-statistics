import { createTeam } from '@/entities/team/lib'

export const teamEastGermany = createTeam({
  confederation: 'UEFA',
  country: 'East Germany',
  names: [{ name: 'East Germany', period: '1950-1990' }],
  flagsPeriod: ['1950-1990'],
  founded: '1950',
  fifa: '1952',
  confederationDate: '1954',
})
