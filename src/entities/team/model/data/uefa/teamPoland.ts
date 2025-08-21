import { createTeam } from '@/entities/team/lib'

export const teamPoland = createTeam({
  confederation: 'UEFA',
  country: 'Poland',
  names: [{ name: 'Poland', period: '1919-p.t.' }],
  flagsPeriod: ['1919-p.t.'],
  founded: '1919',
  fifa: '1923',
  confederationDate: '1954',
})
