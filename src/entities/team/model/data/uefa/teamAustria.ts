import { createTeam } from '@/entities/team/lib'

export const teamAustria = createTeam({
  confederation: 'UEFA',
  country: 'Austria',
  names: [{ name: 'Austria', period: '1904-p.t.' }],
  flagsPeriod: ['1904-p.t.'],
  founded: '1904',
  fifa: '1905',
  confederationDate: '1954',
})
