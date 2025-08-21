import { createTeam } from '@/entities/team/lib'

export const teamKoreaRepublic = createTeam({
  confederation: 'CAF',
  country: 'Korea Republic',
  names: [{ name: 'Korea Republic', period: '1928-p.t.' }],
  flagsPeriod: ['1928-p.t.'],
  founded: '1928',
  fifa: '1948',
  confederationDate: '1954',
})
