import { createTeam } from '@/entities/team/lib'

export const teamKosovo = createTeam({
  confederation: 'UEFA',
  country: 'Kosovo',
  names: [{ name: 'Kosovo', period: '2008-p.t.' }],
  flagsPeriod: ['2008-p.t.'],
  founded: '2008',
  fifa: '2016',
  confederationDate: '2016',
})
