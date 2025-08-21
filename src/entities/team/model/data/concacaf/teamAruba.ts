import { createTeam } from '@/entities/team/lib'

export const teamAruba = createTeam({
  confederation: 'CONCACAF',
  country: 'Aruba',
  names: [{ name: 'Aruba', period: '1932-p.t.' }],
  flagsPeriod: ['1932-p.t.'],
  founded: '1932',
  fifa: '1988',
  confederationDate: '1986',
})
