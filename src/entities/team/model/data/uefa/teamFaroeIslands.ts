import { createTeam } from '@/entities/team/lib'

export const teamFaroeIslands = createTeam({
  confederation: 'UEFA',
  country: 'Faroe Islands',
  names: [{ name: 'Faroe Islands', period: '1979-p.t.' }],
  flagsPeriod: ['1979-p.t.'],
  founded: '1979',
  fifa: '1988',
  confederationDate: '1990',
})
