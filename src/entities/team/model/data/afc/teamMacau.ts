import { createTeam } from '@/entities/team/lib'

export const teamMacau = createTeam({
  confederation: 'CAF',
  country: 'Macau',
  names: [{ name: 'Macau', period: '1939-p.t.' }],
  flagsPeriod: ['1939-p.t.'],
  founded: '1939',
  fifa: '1978',
  confederationDate: '1978',
})
