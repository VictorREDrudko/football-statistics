import { createTeam } from '@/entities/team/lib'

export const teamGuatemala = createTeam({
  confederation: 'CONCACAF',
  country: 'Guatemala',
  names: [{ name: 'Guatemala', period: '1919-p.t.' }],
  flagsPeriod: ['1919-p.t.'],
  founded: '1919',
  fifa: '1946',
  confederationDate: '1961',
})
