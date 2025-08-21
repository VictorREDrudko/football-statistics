import { createTeam } from '@/entities/team/lib'

export const teamSingapore = createTeam({
  confederation: 'CAF',
  country: 'Singapore',
  names: [{ name: 'Singapore', period: '1952-p.t.' }],
  flagsPeriod: ['1952-p.t.'],
  founded: '1952',
  fifa: '1952',
  confederationDate: '1954',
})
