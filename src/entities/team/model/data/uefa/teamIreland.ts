import { createTeam } from '@/entities/team/lib'

export const teamIreland = createTeam({
  confederation: 'UEFA',
  country: 'Ireland',
  names: [{ name: 'Ireland', period: '1921-p.t.' }],
  flagsPeriod: ['1921-p.t.'],
  founded: '1921',
  fifa: '1923',
  confederationDate: '1954',
})
