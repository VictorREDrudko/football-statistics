import { createTeam } from '@/entities/team/lib'

export const teamIceland = createTeam({
  confederation: 'UEFA',
  country: 'Iceland',
  names: [{ name: 'Iceland', period: '1947-p.t.' }],
  flagsPeriod: ['1947-p.t.'],
  founded: '1947',
  fifa: '1947',
  confederationDate: '1954',
})
