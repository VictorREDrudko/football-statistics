import { createTeam } from '@/entities/team/lib'

export const teamDominica = createTeam({
  confederation: 'CONCACAF',
  country: 'Dominica',
  names: [{ name: 'Dominica', period: '1970-p.t.' }],
  flagsPeriod: ['1970-p.t.'],
  founded: '1970',
  fifa: '1994',
  confederationDate: '1994',
})
