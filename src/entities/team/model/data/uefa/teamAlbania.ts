import { createTeam } from '@/entities/team/lib'

export const teamAlbania = createTeam({
  confederation: 'UEFA',
  country: 'Albania',
  names: [{ name: 'Albania', period: '1930-p.t.' }],
  flagsPeriod: ['1930-p.t.'],
  founded: '1930',
  fifa: '1932',
  confederationDate: '1954',
})
