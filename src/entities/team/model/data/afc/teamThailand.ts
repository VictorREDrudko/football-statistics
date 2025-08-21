import { createTeam } from '@/entities/team/lib'

export const teamThailand = createTeam({
  confederation: 'CAF',
  country: 'Thailand',
  names: [{ name: 'Thailand', period: '1916-p.t.' }],
  flagsPeriod: ['1916-p.t.'],
  founded: '1916',
  fifa: '1925',
  confederationDate: '1954',
})
