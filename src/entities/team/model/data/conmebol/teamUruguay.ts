import { createTeam } from '@/entities/team/lib'

export const teamUruguay = createTeam({
  confederation: 'CONMEBOL',
  country: 'Uruguay',
  names: [{ name: 'Uruguay', period: '1990-p.t.' }],
  flagsPeriod: ['1990-p.t.'],
  founded: '1990',
  fifa: '1923',
  confederationDate: '1916',
})
