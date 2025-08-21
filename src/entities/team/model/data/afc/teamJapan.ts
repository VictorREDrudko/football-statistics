import { createTeam } from '@/entities/team/lib'

export const teamJapan = createTeam({
  confederation: 'CAF',
  country: 'Japan',
  names: [{ name: 'Japan', period: '1921-p.t.' }],
  flagsPeriod: ['1921-p.t.'],
  founded: '1921',
  fifa: '1921',
  confederationDate: '1954',
})
