import { createTeam } from '@/entities/team/lib'

export const teamSenegal = createTeam({
  confederation: 'CAF',
  country: 'Senegal',
  names: [{ name: 'Senegal', period: '1960-p.t.' }],
  flagsPeriod: ['1960-p.t.'],
  founded: '1960',
  fifa: '1964',
  confederationDate: '1964',
})
