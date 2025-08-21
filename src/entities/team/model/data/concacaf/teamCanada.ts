import { createTeam } from '@/entities/team/lib'

export const teamCanada = createTeam({
  confederation: 'CONCACAF',
  country: 'Canada',
  names: [{ name: 'Canada', period: '1912-p.t.' }],
  flagsPeriod: ['1912-p.t.'],
  founded: '1912',
  fifa: '1913',
  confederationDate: '1961',
})
