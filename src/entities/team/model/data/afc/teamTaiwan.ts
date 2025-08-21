import { createTeam } from '@/entities/team/lib'

export const teamTaiwan = createTeam({
  confederation: 'CAF',
  country: 'Taiwan',
  names: [{ name: 'Taiwan', period: '1936-p.t.' }],
  flagsPeriod: ['1936-p.t.'],
  founded: '1936',
  fifa: '1954',
  confederationDate: '1954',
})
