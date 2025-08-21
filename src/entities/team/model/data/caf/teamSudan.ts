import { createTeam } from '@/entities/team/lib'

export const teamSudan = createTeam({
  confederation: 'CAF',
  country: 'Sudan',
  names: [{ name: 'Sudan', period: '1936-p.t.' }],
  flagsPeriod: ['1936-p.t.'],
  founded: '1936',
  fifa: '1948',
  confederationDate: '1957',
})
