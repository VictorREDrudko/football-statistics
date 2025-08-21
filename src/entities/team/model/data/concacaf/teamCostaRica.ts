import { createTeam } from '@/entities/team/lib'

export const teamCostaRica = createTeam({
  confederation: 'CONCACAF',
  country: 'Costa Rica',
  names: [{ name: 'Costa Rica', period: '1921-p.t.' }],
  flagsPeriod: ['1921-p.t.'],
  founded: '1921',
  fifa: '1927',
  confederationDate: '1961',
})
