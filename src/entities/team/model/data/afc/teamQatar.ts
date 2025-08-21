import { createTeam } from '@/entities/team/lib'

export const teamQatar = createTeam({
  confederation: 'CAF',
  country: 'Qatar',
  names: [{ name: 'Qatar', period: '1960-p.t.' }],
  flagsPeriod: ['1960-p.t.'],
  founded: '1960',
  fifa: '1972',
  confederationDate: '1974',
})
