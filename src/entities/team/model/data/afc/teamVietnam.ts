import { createTeam } from '@/entities/team/lib'

export const teamVietnam = createTeam({
  confederation: 'CAF',
  country: 'Vietnam',
  names: [{ name: 'Vietnam', period: '1952-p.t.' }],
  flagsPeriod: ['1952-p.t.'],
  founded: '1952',
  fifa: '1952',
  confederationDate: '1954',
})
