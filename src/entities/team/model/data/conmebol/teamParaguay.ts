import { createTeam } from '@/entities/team/lib'

export const teamParaguay = createTeam({
  confederation: 'CONMEBOL',
  country: 'Paraguay',
  names: [{ name: 'Paraguay', period: '1906-p.t.' }],
  flagsPeriod: ['1906-p.t.'],
  founded: '1906',
  fifa: '1925',
  confederationDate: '1921',
})
