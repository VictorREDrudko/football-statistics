import { createTeam } from '@/entities/team/lib'

export const teamPortugal = createTeam({
  confederation: 'UEFA',
  country: 'Portugal',
  names: [{ name: 'Portugal', period: '1914-p.t.' }],
  flagsPeriod: ['1914-p.t.'],
  founded: '1914',
  fifa: '1923',
  confederationDate: '1954',
})
