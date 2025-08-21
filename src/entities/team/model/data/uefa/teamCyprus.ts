import { createTeam } from '@/entities/team/lib'

export const teamCyprus = createTeam({
  confederation: 'UEFA',
  country: 'Cyprus',
  names: [{ name: 'Cyprus', period: '1934-p.t.' }],
  flagsPeriod: ['1934-p.t.'],
  founded: '1934',
  fifa: '1948',
  confederationDate: '1962',
})
