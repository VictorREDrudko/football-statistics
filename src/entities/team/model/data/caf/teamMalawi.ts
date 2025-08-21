import { createTeam } from '@/entities/team/lib'

export const teamMalawi = createTeam({
  confederation: 'CAF',
  country: 'Malawi',
  names: [{ name: 'Malawi', period: '1966-p.t.' }],
  flagsPeriod: ['1966-p.t.'],
  founded: '1966',
  fifa: '1968',
  confederationDate: '1968',
})
