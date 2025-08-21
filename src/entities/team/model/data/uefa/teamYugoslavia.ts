import { createTeam } from '@/entities/team/lib'

export const teamYugoslavia = createTeam({
  confederation: 'UEFA',
  country: 'Yugoslavia',
  names: [{ name: 'Yugoslavia', period: '1918-1992' }],
  flagsPeriod: ['1918-1944', '1945-1992'],
  founded: '1919',
  fifa: '1923',
  confederationDate: '1954',
})
