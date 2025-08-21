import { createTeam } from '@/entities/team/lib'

export const teamSlovakia = createTeam({
  confederation: 'UEFA',
  country: 'Slovakia',
  names: [{ name: 'Slovakia', period: '1938-p.t.' }],
  flagsPeriod: ['1938-p.t.'],
  founded: '1938',
  fifa: '1994',
  confederationDate: '1994',
})
