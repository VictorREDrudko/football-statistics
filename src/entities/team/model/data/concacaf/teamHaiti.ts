import { createTeam } from '@/entities/team/lib'

export const teamHaiti = createTeam({
  confederation: 'CONCACAF',
  country: 'Haiti',
  names: [{ name: 'Haiti', period: '1904-p.t.' }],
  flagsPeriod: ['1904-p.t.'],
  founded: '1904',
  fifa: '1934',
  confederationDate: '1961',
})
