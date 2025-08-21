import { createTeam } from '@/entities/team/lib'

export const teamBermuda = createTeam({
  confederation: 'CONCACAF',
  country: 'Bermuda',
  names: [{ name: 'Bermuda', period: '1928-p.t.' }],
  flagsPeriod: ['1928-p.t.'],
  founded: '1928',
  fifa: '1962',
  confederationDate: '1967',
})
