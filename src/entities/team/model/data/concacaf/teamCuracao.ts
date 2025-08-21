import { createTeam } from '@/entities/team/lib'

export const teamCuracao = createTeam({
  confederation: 'CONCACAF',
  country: 'Curacao',
  names: [{ name: 'Curacao', period: '1990-p.t.' }],
  flagsPeriod: ['1990-p.t.'],
  founded: '1990',
  fifa: '1996',
  confederationDate: '1996',
})
