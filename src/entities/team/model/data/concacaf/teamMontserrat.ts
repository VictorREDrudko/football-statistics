import { createTeam } from '@/entities/team/lib'

export const teamMontserrat = createTeam({
  confederation: 'CONCACAF',
  country: 'Montserrat',
  names: [{ name: 'Montserrat', period: '1994-p.t.' }],
  flagsPeriod: ['1994-p.t.'],
  founded: '1994',
  fifa: '1996',
  confederationDate: '1996',
})
