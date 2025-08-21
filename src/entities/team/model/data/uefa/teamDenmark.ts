import { createTeam } from '@/entities/team/lib'

export const teamDenmark = createTeam({
  confederation: 'UEFA',
  country: 'Denmark',
  names: [{ name: 'Denmark', period: '1889-p.t.' }],
  flagsPeriod: ['1889-p.t.'],
  founded: '1889',
  fifa: '1904',
  confederationDate: '1954',
})
