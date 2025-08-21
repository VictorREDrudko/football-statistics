import { createTeam } from '@/entities/team/lib'

export const teamGreece = createTeam({
  confederation: 'UEFA',
  country: 'Greece',
  names: [{ name: 'Greece', period: '1926-p.t.' }],
  flagsPeriod: ['1926-p.t.'],
  founded: '1926',
  fifa: '1927',
  confederationDate: '1954',
})
