import { createTeam } from '@/entities/team/lib'

export const teamBelize = createTeam({
  confederation: 'CONCACAF',
  country: 'Belize',
  names: [{ name: 'Belize', period: '1980-p.t.' }],
  flagsPeriod: ['1980-p.t.'],
  founded: '1980',
  fifa: '1986',
  confederationDate: '1986',
})
