import { createTeam } from '@/entities/team/lib'

export const teamGuyana = createTeam({
  confederation: 'CONCACAF',
  country: 'Guyana',
  names: [{ name: 'Guyana', period: '1902-p.t.' }],
  flagsPeriod: ['1902-p.t.'],
  founded: '1902',
  fifa: '1970',
  confederationDate: '1969',
})
