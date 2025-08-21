import { createTeam } from '@/entities/team/lib'

export const teamTurkey = createTeam({
  confederation: 'UEFA',
  country: 'Turkey',
  names: [{ name: 'Turkey', period: '1923-p.t.' }],
  flagsPeriod: ['1923-p.t.'],
  founded: '1923',
  fifa: '1923',
  confederationDate: '1962',
})
