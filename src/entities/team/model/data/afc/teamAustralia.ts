import { createTeam } from '@/entities/team/lib'

export const teamAustralia = createTeam({
  confederation: 'CAF',
  country: 'Australia',
  names: [{ name: 'Australia', period: '1961-p.t.' }],
  flagsPeriod: ['1961-p.t.'],
  founded: '1961',
  fifa: '1963',
  confederationDate: '2006',
})
