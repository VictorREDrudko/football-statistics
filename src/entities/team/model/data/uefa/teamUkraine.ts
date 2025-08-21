import { createTeam } from '@/entities/team/lib'

export const teamUkraine = createTeam({
  confederation: 'UEFA',
  country: 'Ukraine',
  names: [{ name: 'Ukraine', period: '1991-p.t.' }],
  flagsPeriod: ['1991-p.t.'],
  founded: '1991',
  fifa: '1992',
  confederationDate: '1992',
})
