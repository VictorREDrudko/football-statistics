import { createTeam } from '@/entities/team/lib'

export const teamMorocco = createTeam({
  confederation: 'CAF',
  country: 'Morocco',
  names: [{ name: 'Morocco', period: '1955-p.t.' }],
  flagsPeriod: ['1955-p.t.'],
  founded: '1955',
  fifa: '1960',
  confederationDate: '1959',
})
