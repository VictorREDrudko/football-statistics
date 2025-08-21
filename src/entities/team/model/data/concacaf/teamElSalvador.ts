import { createTeam } from '@/entities/team/lib'

export const teamElSalvador = createTeam({
  confederation: 'CONCACAF',
  country: 'El Salvador',
  names: [{ name: 'El Salvador', period: '1935-p.t.' }],
  flagsPeriod: ['1935-p.t.'],
  founded: '1935',
  fifa: '1938',
  confederationDate: '1961',
})
