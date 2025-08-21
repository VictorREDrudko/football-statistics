import { createTeam } from '@/entities/team/lib'

export const teamReunion = createTeam({
  confederation: 'CAF',
  country: 'Reunion',
  names: [{ name: 'Reunion', period: '1956-p.t.' }],
  flagsPeriod: ['1956-p.t.'],
  founded: '1956',
  fifa: '-',
  confederationDate: '1992',
})
