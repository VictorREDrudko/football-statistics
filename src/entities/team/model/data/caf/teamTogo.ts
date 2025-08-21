import { createTeam } from '@/entities/team/lib'

export const teamTogo = createTeam({
  confederation: 'CAF',
  country: 'Togo',
  names: [{ name: 'Togo', period: '1960-p.t.' }],
  flagsPeriod: ['1960-p.t.'],
  founded: '1960',
  fifa: '1962',
  confederationDate: '1964',
})
