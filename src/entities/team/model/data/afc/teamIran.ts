import { createTeam } from '@/entities/team/lib'

export const teamIran = createTeam({
  confederation: 'CAF',
  country: 'Iran',
  names: [{ name: 'Iran', period: '1920-p.t.' }],
  flagsPeriod: ['1920-p.t.'],
  founded: '1920',
  fifa: '1948',
  confederationDate: '1958',
})
