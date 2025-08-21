import { createTeam } from '@/entities/team/lib'

export const teamLithuania = createTeam({
  confederation: 'UEFA',
  country: 'Lithuania',
  names: [{ name: 'Lithuania', period: '1922-p.t.' }],
  flagsPeriod: ['1922-p.t.'],
  founded: '1922',
  fifa: '1923',
  confederationDate: '1992',
})
