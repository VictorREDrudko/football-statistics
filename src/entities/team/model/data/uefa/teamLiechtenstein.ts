import { createTeam } from '@/entities/team/lib'

export const teamLiechtenstein = createTeam({
  confederation: 'UEFA',
  country: 'Liechtenstein',
  names: [{ name: 'Liechtenstein', period: '1974-p.t.' }],
  flagsPeriod: ['1974-p.t.'],
  founded: '1934',
  fifa: '1974',
  confederationDate: '1974',
})
