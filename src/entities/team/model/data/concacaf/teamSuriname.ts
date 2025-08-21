import { createTeam } from '@/entities/team/lib'

export const teamSuriname = createTeam({
  confederation: 'CONCACAF',
  country: 'Suriname',
  names: [{ name: 'Suriname', period: '1920-p.t.' }],
  flagsPeriod: ['1920-p.t.'],
  founded: '1920',
  fifa: '1929',
  confederationDate: '1961',
})
