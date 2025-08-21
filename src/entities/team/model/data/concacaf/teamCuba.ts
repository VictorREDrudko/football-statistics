import { createTeam } from '@/entities/team/lib'

export const teamCuba = createTeam({
  confederation: 'CONCACAF',
  country: 'Cuba',
  names: [{ name: 'Cuba', period: '1924-p.t.' }],
  flagsPeriod: ['1924-p.t.'],
  founded: '1924',
  fifa: '1929',
  confederationDate: '1961',
})
