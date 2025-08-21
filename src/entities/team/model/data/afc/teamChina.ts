import { createTeam } from '@/entities/team/lib'

export const teamChina = createTeam({
  confederation: 'CAF',
  country: 'China',
  names: [{ name: 'China', period: '1924-p.t.' }],
  flagsPeriod: ['1924-p.t.'],
  founded: '1924',
  fifa: '1931',
  confederationDate: '1974',
})
