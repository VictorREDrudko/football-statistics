import { createTeam } from '@/entities/team/lib'

export const teamSweden = createTeam({
  confederation: 'UEFA',
  country: 'Sweden',
  names: [{ name: 'Sweden', period: '1904-p.t.' }],
  flagsPeriod: ['1904-p.t.'],
  founded: '1904',
  fifa: '1904',
  confederationDate: '1954',
})
