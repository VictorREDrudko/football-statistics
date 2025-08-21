import { createTeam } from '@/entities/team/lib'

export const teamZambia = createTeam({
  confederation: 'CAF',
  country: 'Zambia',
  names: [{ name: 'Zambia', period: '1929-p.t.' }],
  flagsPeriod: ['1929-p.t.'],
  founded: '1929',
  fifa: '1964',
  confederationDate: '1964',
})
