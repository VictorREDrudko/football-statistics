import { createTeam } from '@/entities/team/lib'

export const teamCzechoslovakia = createTeam({
  confederation: 'UEFA',
  country: 'Czechoslovakia',
  names: [{ name: 'Czechoslovakia', period: '1901-1992' }],
  flagsPeriod: ['1901-1992'],
  founded: '1901',
  fifa: '1907',
  confederationDate: '1954',
})
