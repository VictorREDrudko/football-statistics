import { createTeam } from '@/entities/team/lib'

export const teamCroatia = createTeam({
  confederation: 'UEFA',
  country: 'Croatia',
  names: [{ name: 'Croatia', period: '1912-p.t.' }],
  flagsPeriod: ['1912-p.t.'],
  founded: '1912',
  fifa: '1941',
  confederationDate: '1993',
})
