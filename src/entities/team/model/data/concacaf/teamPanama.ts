import { createTeam } from '@/entities/team/lib'

export const teamPanama = createTeam({
  confederation: 'CONCACAF',
  country: 'Panama',
  names: [{ name: 'Panama', period: '1937-p.t.' }],
  flagsPeriod: ['1937-p.t.'],
  founded: '1937',
  fifa: '1938',
  confederationDate: '1961',
})
