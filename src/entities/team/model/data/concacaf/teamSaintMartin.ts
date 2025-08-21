import { createTeam } from '@/entities/team/lib'

export const teamSaintMartin = createTeam({
  confederation: 'CONCACAF',
  country: 'Saint Martin',
  names: [{ name: 'Saint Martin', period: '1999-p.t.' }],
  flagsPeriod: ['1999-p.t.'],
  founded: '1999',
  fifa: '-',
  confederationDate: '2013',
})
