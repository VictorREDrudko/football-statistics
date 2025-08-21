import { createTeam } from '@/entities/team/lib'

export const teamPhilippines = createTeam({
  confederation: 'CAF',
  country: 'Philippines',
  names: [{ name: 'Philippines', period: '1907-p.t.' }],
  flagsPeriod: ['1907-p.t.'],
  founded: '1907',
  fifa: '1930',
  confederationDate: '1954',
})
