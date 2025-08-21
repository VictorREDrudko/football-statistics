import { createTeam } from '@/entities/team/lib'

export const teamGuam = createTeam({
  confederation: 'CAF',
  country: 'Guam',
  names: [{ name: 'Guam', period: '1975-p.t.' }],
  flagsPeriod: ['1975-p.t.'],
  founded: '1975',
  fifa: '1996',
  confederationDate: '1991',
})
