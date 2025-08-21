import { createTeam } from '@/entities/team/lib'

export const teamNewZealand = createTeam({
  confederation: 'OFC',
  country: 'New Zealand',
  names: [{ name: 'New Zealand', period: '1891-p.t.' }],
  flagsPeriod: ['1891-p.t.'],
  founded: '1891',
  fifa: '1948',
  confederationDate: '1966',
})
