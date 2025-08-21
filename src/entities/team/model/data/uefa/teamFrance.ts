import { createTeam } from '@/entities/team/lib'

export const teamFrance = createTeam({
  confederation: 'UEFA',
  country: 'France',
  names: [{ name: 'France', period: '1919-p.t.' }],
  flagsPeriod: ['1919-p.t.'],
  founded: '1919',
  fifa: '1919',
  confederationDate: '1954',
})
