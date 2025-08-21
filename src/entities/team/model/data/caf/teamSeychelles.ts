import { createTeam } from '@/entities/team/lib'

export const teamSeychelles = createTeam({
  confederation: 'CAF',
  country: 'Seychelles',
  names: [{ name: 'Seychelles', period: '1979-p.t.' }],
  flagsPeriod: ['1979-p.t.'],
  founded: '1979',
  fifa: '1986',
  confederationDate: '1986',
})
