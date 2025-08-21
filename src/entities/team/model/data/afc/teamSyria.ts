import { createTeam } from '@/entities/team/lib'

export const teamSyria = createTeam({
  confederation: 'CAF',
  country: 'Syria',
  names: [{ name: 'Syria', period: '1936-p.t.' }],
  flagsPeriod: ['1936-p.t.'],
  founded: '1936',
  fifa: '1937',
  confederationDate: '1970',
})
