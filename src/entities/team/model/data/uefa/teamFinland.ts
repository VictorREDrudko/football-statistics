import { createTeam } from '@/entities/team/lib'

export const teamFinland = createTeam({
  confederation: 'UEFA',
  country: 'Finland',
  names: [{ name: 'Finland', period: '1907-p.t.' }],
  flagsPeriod: ['1907-p.t.'],
  founded: '1907',
  fifa: '1908',
  confederationDate: '1954',
})
