import { createTeam } from '@/entities/team/lib'

export const teamRomania = createTeam({
  confederation: 'UEFA',
  country: 'Romania',
  names: [{ name: 'Romania', period: '1909-p.t.' }],
  flagsPeriod: ['1912-p.t.'],
  founded: '1909',
  fifa: '1923',
  confederationDate: '1954',
})
