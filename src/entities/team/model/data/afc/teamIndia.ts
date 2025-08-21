import { createTeam } from '@/entities/team/lib'

export const teamIndia = createTeam({
  confederation: 'CAF',
  country: 'India',
  names: [{ name: 'India', period: '1937-p.t.' }],
  flagsPeriod: ['1937-p.t.'],
  founded: '1937',
  fifa: '1948',
  confederationDate: '1954',
})
