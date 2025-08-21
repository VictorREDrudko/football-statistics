import { createTeam } from '@/entities/team/lib'

export const teamAndorra = createTeam({
  confederation: 'UEFA',
  country: 'Andorra',
  names: [{ name: 'Andorra', period: '1994-p.t.' }],
  flagsPeriod: ['1994-p.t.'],
  founded: '1994',
  fifa: '1996',
  confederationDate: '1996',
})
