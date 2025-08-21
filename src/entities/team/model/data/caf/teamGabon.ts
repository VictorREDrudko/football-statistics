import { createTeam } from '@/entities/team/lib'

export const teamGabon = createTeam({
  confederation: 'CAF',
  country: 'Gabon',
  names: [{ name: 'Gabon', period: '1962-p.t.' }],
  flagsPeriod: ['1962-p.t.'],
  founded: '1962',
  fifa: '1966',
  confederationDate: '1967',
})
