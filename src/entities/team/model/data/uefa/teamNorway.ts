import { createTeam } from '@/entities/team/lib'

export const teamNorway = createTeam({
  confederation: 'UEFA',
  country: 'Norway',
  names: [{ name: 'Norway', period: '1902-p.t.' }],
  flagsPeriod: ['1902-p.t.'],
  founded: '1902',
  fifa: '1908',
  confederationDate: '1954',
})
