import { createTeam } from '@/entities/team/lib'

export const teamAntiguaAndBarbuda = createTeam({
  confederation: 'CONCACAF',
  country: 'Antigua and Barbuda',
  names: [{ name: 'Antigua and Barbuda', period: '1928-p.t.' }],
  flagsPeriod: ['1928-p.t.'],
  founded: '1928',
  fifa: '1972',
  confederationDate: '1961',
})
