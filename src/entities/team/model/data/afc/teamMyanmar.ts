import { createTeam } from '@/entities/team/lib'

export const teamMyanmar = createTeam({
  confederation: 'CAF',
  country: 'Myanmar',
  names: [{ name: 'Myanmar', period: '1947-p.t.' }],
  flagsPeriod: ['1947-p.t.'],
  founded: '1947',
  fifa: '1948',
  confederationDate: '1954',
})
