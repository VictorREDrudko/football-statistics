import { createTeam } from '@/entities/team/lib'

export const teamHonduras = createTeam({
  confederation: 'CONCACAF',
  country: 'Honduras',
  names: [{ name: 'Honduras', period: '1935-p.t.' }],
  flagsPeriod: ['1935-p.t.'],
  founded: '1935',
  fifa: '1946',
  confederationDate: '1961',
})
