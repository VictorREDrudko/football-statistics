import { createTeam } from '@/entities/team/lib'

export const teamEstonia = createTeam({
  confederation: 'UEFA',
  country: 'Estonia',
  names: [{ name: 'Estonia', period: '1992-p.t.' }],
  flagsPeriod: ['1992-p.t.'],
  founded: '1921',
  fifa: '1923',
  confederationDate: '1992',
})
