import { createTeam } from '@/entities/team/lib'

export const teamHongKong = createTeam({
  confederation: 'CAF',
  country: 'Hong Kong',
  names: [{ name: 'Hong Kong', period: '1914-p.t.' }],
  flagsPeriod: ['1914-p.t.'],
  founded: '1914',
  fifa: '1954',
  confederationDate: '1954',
})
