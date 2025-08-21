import { createTeam } from '@/entities/team/lib'

export const teamMadagascar = createTeam({
  confederation: 'CAF',
  country: 'Madagascar',
  names: [{ name: 'Madagascar', period: '1961-p.t.' }],
  flagsPeriod: ['1961-p.t.'],
  founded: '1961',
  fifa: '1964',
  confederationDate: '1963',
})
