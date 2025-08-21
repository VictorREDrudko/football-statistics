import { createTeam } from '@/entities/team/lib'

export const teamMexico = createTeam({
  confederation: 'CONCACAF',
  country: 'Mexico',
  names: [{ name: 'Mexico', period: '1922-p.t.' }],
  flagsPeriod: ['1922-p.t.'],
  founded: '1922',
  fifa: '1929',
  confederationDate: '1961',
})
