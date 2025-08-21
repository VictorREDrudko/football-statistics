import { createTeam } from '@/entities/team/lib'

export const teamYemen = createTeam({
  confederation: 'CAF',
  country: 'Yemen',
  names: [{ name: 'Yemen', period: '1962-p.t.' }],
  flagsPeriod: ['1962-p.t.'],
  founded: '1962',
  fifa: '1980',
  confederationDate: '1980',
})
