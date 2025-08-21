import { createTeam } from '@/entities/team/lib'

export const teamBrazil = createTeam({
  confederation: 'CONMEBOL',
  country: 'Brazil',
  names: [{ name: 'Brazil', period: '1914-p.t.' }],
  flagsPeriod: ['1914-p.t.'],
  founded: '1914',
  fifa: '1923',
  confederationDate: '1916',
})
