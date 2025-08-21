import { createTeam } from '@/entities/team/lib'

export const teamScotland = createTeam({
  confederation: 'UEFA',
  country: 'Scotland',
  names: [{ name: 'Scotland', period: '1873-p.t.' }],
  flagsPeriod: ['1873-p.t.'],
  founded: '1873',
  fifa: '1910',
  confederationDate: '1954',
})
