import { createTeam } from '@/entities/team/lib'

export const teamMalaysia = createTeam({
  confederation: 'CAF',
  country: 'Malaysia',
  names: [{ name: 'Malaysia', period: '1933-p.t.' }],
  flagsPeriod: ['1933-p.t.'],
  founded: '1933',
  fifa: '1954',
  confederationDate: '1954',
})
