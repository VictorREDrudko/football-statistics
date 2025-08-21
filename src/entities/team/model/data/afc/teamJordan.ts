import { createTeam } from '@/entities/team/lib'

export const teamJordan = createTeam({
  confederation: 'CAF',
  country: 'Jordan',
  names: [{ name: 'Jordan', period: '1949-p.t.' }],
  flagsPeriod: ['1949-p.t.'],
  founded: '1949',
  fifa: '1956',
  confederationDate: '1970',
})
