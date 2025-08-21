import { createTeam } from '@/entities/team/lib'

export const teamFrenchGuiana = createTeam({
  confederation: 'CONCACAF',
  country: 'French Guiana',
  names: [{ name: 'French Guiana', period: '1962-p.t.' }],
  flagsPeriod: ['1962-p.t.'],
  founded: '1962',
  fifa: '-',
  confederationDate: '2013',
})
