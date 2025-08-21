import { createTeam } from '@/entities/team/lib'

export const teamBarbados = createTeam({
  confederation: 'CONCACAF',
  country: 'Barbados',
  names: [{ name: 'Barbados', period: '1910-p.t.' }],
  flagsPeriod: ['1910-p.t.'],
  founded: '1910',
  fifa: '1968',
  confederationDate: '1967',
})
