import { createTeam } from '@/entities/team/lib'

export const teamBritishVirginIslands = createTeam({
  confederation: 'CONCACAF',
  country: 'British Virgin Islands',
  names: [{ name: 'British Virgin Islands', period: '1974-p.t.' }],
  flagsPeriod: ['1974-p.t.'],
  founded: '1974',
  fifa: '1996',
  confederationDate: '1996',
})
