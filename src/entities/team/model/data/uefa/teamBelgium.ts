import { createTeam } from '@/entities/team/lib'

export const teamBelgium = createTeam({
  confederation: 'UEFA',
  country: 'Belgium',
  names: [{ name: 'Belgium', period: '1895-p.t.' }],
  flagsPeriod: ['1895-p.t.'],
  founded: '1895',
  fifa: '1904',
  confederationDate: '1954',
})
