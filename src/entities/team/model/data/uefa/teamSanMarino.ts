import { createTeam } from '@/entities/team/lib'

export const teamSanMarino = createTeam({
  confederation: 'UEFA',
  country: 'San Marino',
  names: [{ name: 'San Marino', period: '1931-p.t.' }],
  flagsPeriod: ['1931-p.t.'],
  founded: '1931',
  fifa: '1988',
  confederationDate: '1988',
})
