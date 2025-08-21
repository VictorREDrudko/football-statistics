import { createTeam } from '@/entities/team/lib'

export const teamBelarus = createTeam({
  confederation: 'UEFA',
  country: 'Belarus',
  names: [{ name: 'Belarus', period: '1989-p.t.' }],
  flagsPeriod: ['1989-p.t.'],
  founded: '1989',
  fifa: '1992',
  confederationDate: '1993',
})
