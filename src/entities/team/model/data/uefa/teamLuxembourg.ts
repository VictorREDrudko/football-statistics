import { createTeam } from '@/entities/team/lib'

export const teamLuxembourg = createTeam({
  confederation: 'UEFA',
  country: 'Luxembourg',
  names: [{ name: 'Luxembourg', period: '1908-p.t.' }],
  flagsPeriod: ['1908-p.t.'],
  founded: '1908',
  fifa: '1910',
  confederationDate: '1954',
})
