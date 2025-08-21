import { createTeam } from '@/entities/team/lib'

export const teamOman = createTeam({
  confederation: 'CAF',
  country: 'Oman',
  names: [{ name: 'Oman', period: '1978-p.t.' }],
  flagsPeriod: ['1978-p.t.'],
  founded: '1978',
  fifa: '1980',
  confederationDate: '1980',
})
