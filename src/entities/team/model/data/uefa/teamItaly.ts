import { createTeam } from '@/entities/team/lib'

export const teamItaly = createTeam({
  confederation: 'UEFA',
  country: 'Italy',
  names: [{ name: 'Italy', period: '1928-p.t.' }],
  flagsPeriod: ['1946-p.t.', '1925-1945'],
  founded: '1898',
  fifa: '1905',
  confederationDate: '1954',
})
