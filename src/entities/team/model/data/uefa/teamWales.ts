import { createTeam } from '@/entities/team/lib'

export const teamWales = createTeam({
  confederation: 'UEFA',
  country: 'Wales',
  names: [{ name: 'Wales', period: '1876-p.t.' }],
  flagsPeriod: ['1876-p.t.'],
  founded: '1876',
  fifa: '1910',
  confederationDate: '1954',
})
