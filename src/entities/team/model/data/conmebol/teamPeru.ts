import { createTeam } from '@/entities/team/lib'

export const teamPeru = createTeam({
  confederation: 'CONMEBOL',
  country: 'Peru',
  names: [{ name: 'Peru', period: '1922-p.t.' }],
  flagsPeriod: ['1922-p.t.'],
  founded: '1922',
  fifa: '1924',
  confederationDate: '1925',
})
