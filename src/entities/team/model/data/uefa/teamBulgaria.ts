import { createTeam } from '@/entities/team/lib'

export const teamBulgaria = createTeam({
  confederation: 'UEFA',
  country: 'Bulgaria',
  names: [{ name: 'Bulgaria', period: '1923-p.t.' }],
  flagsPeriod: ['1923-p.t.'],
  founded: '1923',
  fifa: '1924',
  confederationDate: '1954',
})
