import { createTeam } from '@/entities/team/lib'

export const teamUSVirginIslands = createTeam({
  confederation: 'CONCACAF',
  country: 'U.S. Virgin Islands',
  names: [{ name: 'U.S. Virgin Islands', period: '1987-p.t.' }],
  flagsPeriod: ['1987-p.t.'],
  founded: '1987',
  fifa: '1998',
  confederationDate: '1987',
})
