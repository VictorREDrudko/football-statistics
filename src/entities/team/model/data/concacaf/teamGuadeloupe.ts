import { createTeam } from '@/entities/team/lib'

export const teamGuadeloupe = createTeam({
  confederation: 'CONCACAF',
  country: 'Guadeloupe',
  names: [{ name: 'Guadeloupe', period: '1958-p.t.' }],
  flagsPeriod: ['1958-p.t.'],
  founded: '1958',
  fifa: '-',
  confederationDate: '2013',
})
