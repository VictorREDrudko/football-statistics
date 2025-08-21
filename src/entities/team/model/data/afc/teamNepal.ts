import { createTeam } from '@/entities/team/lib'

export const teamNepal = createTeam({
  confederation: 'CAF',
  country: 'Nepal',
  names: [{ name: 'Nepal', period: '1951-p.t.' }],
  flagsPeriod: ['1951-p.t.'],
  founded: '1951',
  fifa: '1972',
  confederationDate: '1954',
})