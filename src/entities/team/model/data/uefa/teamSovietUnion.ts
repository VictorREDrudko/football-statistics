import { createTeam } from '@/entities/team/lib'

export const teamSovietUnion = createTeam({
  confederation: 'UEFA',
  country: 'Soviet Union',
  names: [{ name: 'Soviet Union', period: '1934-1991' }],
  flagsPeriod: ['1934-1991'],
  founded: '1934',
  fifa: '1946',
  confederationDate: '1954',
})
