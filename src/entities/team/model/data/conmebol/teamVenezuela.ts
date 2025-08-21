import { createTeam } from '@/entities/team/lib'

export const teamVenezuela = createTeam({
  confederation: 'CONMEBOL',
  country: 'Venezuela',
  names: [{ name: 'Venezuela', period: '1925-p.t.' }],
  flagsPeriod: ['1925-p.t.'],
  founded: '1925',
  fifa: '1952',
  confederationDate: '1953',
})
