import { createTeam } from '@/entities/team/lib'

export const teamLatvia = createTeam({
  confederation: 'UEFA',
  country: 'Latvia',
  names: [{ name: 'Latvia', period: '1921-p.t.' }],
  flagsPeriod: ['1921-p.t.'],
  founded: '1921',
  fifa: '1922',
  confederationDate: '1992',
})
