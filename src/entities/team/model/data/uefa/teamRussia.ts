import { createTeam } from '@/entities/team/lib'

export const teamRussia = createTeam({
  confederation: 'UEFA',
  country: 'Russia',
  names: [{ name: 'Russia', period: '1912-p.t.' }],
  flagsPeriod: ['1912-p.t.'],
  founded: '1912',
  fifa: '1912',
  confederationDate: '1954',
})
