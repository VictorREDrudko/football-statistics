import { createTeam } from '@/entities/team/lib'

export const teamEngland = createTeam({
  confederation: 'UEFA',
  country: 'England',
  names: [{ name: 'England', period: '1863-p.t.' }],
  flagsPeriod: ['1863-p.t.'],
  founded: '1863',
  fifa: '1905',
  confederationDate: '1954',
})
