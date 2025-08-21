import { createTeam } from '@/entities/team/lib'

export const teamSouthAfrica = createTeam({
  confederation: 'CAF',
  country: 'South Africa',
  names: [{ name: 'South Africa', period: '1991-p.t.' }],
  flagsPeriod: ['1991-p.t.'],
  founded: '1991',
  fifa: '1992',
  confederationDate: '1992',
})
