import { createTeam } from '@/entities/team/lib'

export const teamFiji = createTeam({
  confederation: 'OFC',
  country: 'Fiji',
  names: [{ name: 'Fiji', period: '1938-p.t.' }],
  flagsPeriod: ['1938-p.t.'],
  founded: '1938',
  fifa: '1964',
  confederationDate: '1966',
})
