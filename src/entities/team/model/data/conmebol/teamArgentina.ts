import { createTeam } from '@/entities/team/lib'

export const teamArgentina = createTeam({
  confederation: 'CONMEBOL',
  country: 'Argentina',
  names: [{ name: 'Argentina', period: '1893-p.t.' }],
  flagsPeriod: ['1893-p.t.'],
  founded: '1893',
  fifa: '1912',
  confederationDate: '1916',
})
