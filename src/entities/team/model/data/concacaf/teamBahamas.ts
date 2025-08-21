import { createTeam } from '@/entities/team/lib'

export const teamBahamas = createTeam({
  confederation: 'CONCACAF',
  country: 'Bahamas',
  names: [{ name: 'Bahamas', period: '1967-p.t.' }],
  flagsPeriod: ['1967-p.t.'],
  founded: '1967',
  fifa: '1968',
  confederationDate: '1961',
})
