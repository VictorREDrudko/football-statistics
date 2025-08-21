import { createTeam } from '@/entities/team/lib'

export const teamCongo = createTeam({
  confederation: 'CAF',
  country: 'Congo',
  names: [{ name: 'Congo', period: '1962-p.t.' }],
  flagsPeriod: ['1962-p.t.'],
  founded: '1962',
  fifa: '1964',
  confederationDate: '1966',
})