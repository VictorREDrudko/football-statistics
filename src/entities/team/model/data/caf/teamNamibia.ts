import { createTeam } from '@/entities/team/lib'

export const teamNamibia = createTeam({
  confederation: 'CAF',
  country: 'Namibia',
  names: [{ name: 'Namibia', period: '1990-p.t.' }],
  flagsPeriod: ['1990-p.t.'],
  founded: '1990',
  fifa: '1992',
  confederationDate: '1992',
})