import { createTeam } from '@/entities/team/lib'

export const teamKenya = createTeam({
  confederation: 'CAF',
  country: 'Kenya',
  names: [{ name: 'Kenya', period: '1960-p.t.' }],
  flagsPeriod: ['1960-p.t.'],
  founded: '1960',
  fifa: '1960',
  confederationDate: '1968',
})