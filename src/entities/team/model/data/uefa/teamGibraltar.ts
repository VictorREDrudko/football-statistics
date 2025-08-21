import { createTeam } from '@/entities/team/lib'

export const teamGibraltar = createTeam({
  confederation: 'UEFA',
  country: 'Gibraltar',
  names: [{ name: 'Gibraltar', period: '2016-p.t.' }],
  flagsPeriod: ['2016-p.t.'],
  founded: '1895',
  fifa: '2016',
  confederationDate: '2013',
})
