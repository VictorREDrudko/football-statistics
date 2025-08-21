import { createTeam } from '@/entities/team/lib'

export const teamMozambique = createTeam({
  confederation: 'CAF',
  country: 'Mozambique',
  names: [{ name: 'Mozambique', period: '1976-p.t.' }],
  flagsPeriod: ['1976-p.t.'],
  founded: '1976',
  fifa: '1980',
  confederationDate: '1980',
})
