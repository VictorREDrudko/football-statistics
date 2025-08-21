import { createTeam } from '@/entities/team/lib'

export const teamMontenegro = createTeam({
  confederation: 'UEFA',
  country: 'Montenegro',
  names: [{ name: 'Montenegro', period: '2007-p.t.' }],
  flagsPeriod: ['2007-p.t.'],
  founded: '1931',
  fifa: '2007',
  confederationDate: '2007',
})
