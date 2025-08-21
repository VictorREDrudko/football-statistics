import { createTeam } from '@/entities/team/lib'

export const teamGrenada = createTeam({
  confederation: 'CONCACAF',
  country: 'Grenada',
  names: [{ name: 'Grenada', period: '1924-p.t.' }],
  flagsPeriod: ['1924-p.t.'],
  founded: '1924',
  fifa: '1978',
  confederationDate: '1978',
})
