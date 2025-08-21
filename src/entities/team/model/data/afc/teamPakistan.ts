import { createTeam } from '@/entities/team/lib'

export const teamPakistan = createTeam({
  confederation: 'CAF',
  country: 'Pakistan',
  names: [{ name: 'Pakistan', period: '1947-p.t.' }],
  flagsPeriod: ['1947-p.t.'],
  founded: '1947',
  fifa: '1948',
  confederationDate: '1954',
})
