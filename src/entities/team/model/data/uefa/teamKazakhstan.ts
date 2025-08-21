import { createTeam } from '@/entities/team/lib'

export const teamKazakhstan = createTeam({
  confederation: 'UEFA',
  country: 'Kazakhstan',
  names: [{ name: 'Kazakhstan', period: '1994-p.t.' }],
  flagsPeriod: ['1994-p.t.'],
  founded: '1994',
  fifa: '1994',
  confederationDate: '2002',
})
