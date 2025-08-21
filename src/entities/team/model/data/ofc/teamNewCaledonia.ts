import { createTeam } from '@/entities/team/lib'

export const teamNewCaledonia = createTeam({
  confederation: 'OFC',
  country: 'New Caledonia',
  names: [{ name: 'New Caledonia', period: '1928-p.t.' }],
  flagsPeriod: ['1928-p.t.'],
  founded: '1928',
  fifa: '2004',
  confederationDate: '1999',
})
