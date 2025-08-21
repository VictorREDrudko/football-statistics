import { createTeam } from '@/entities/team/lib'

export const teamMoldova = createTeam({
  confederation: 'UEFA',
  country: 'Moldova',
  names: [{ name: 'Moldova', period: '1990-p.t.' }],
  flagsPeriod: ['1990-p.t.'],
  founded: '1990',
  fifa: '1994',
  confederationDate: '1993',
})
