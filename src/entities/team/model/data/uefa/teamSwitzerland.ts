import { createTeam } from '@/entities/team/lib'

export const teamSwitzerland = createTeam({
  confederation: 'UEFA',
  country: 'Switzerland',
  names: [{ name: 'Switzerland', period: '1895-p.t.' }],
  flagsPeriod: ['1895-p.t.'],
  founded: '1895',
  fifa: '1904',
  confederationDate: '1954',
})
