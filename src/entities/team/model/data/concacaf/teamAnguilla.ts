import { createTeam } from '@/entities/team/lib'

export const teamAnguilla = createTeam({
  confederation: 'CONCACAF',
  country: 'Anguilla',
  names: [{ name: 'Anguilla', period: '1990-p.t.' }],
  flagsPeriod: ['1990-p.t.'],
  founded: '1990',
  fifa: '1996',
  confederationDate: '1996',
})
