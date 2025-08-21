import { createTeam } from '@/entities/team/lib'

export const teamSintMaarten = createTeam({
  confederation: 'CONCACAF',
  country: 'Sint Maarten',
  names: [{ name: 'Sint Maarten', period: '1986-p.t.' }],
  flagsPeriod: ['1986-p.t.'],
  founded: '1986',
  fifa: '-',
  confederationDate: '2013',
})
