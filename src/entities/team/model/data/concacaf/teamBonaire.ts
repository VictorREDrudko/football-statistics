import { createTeam } from '@/entities/team/lib'

export const teamBonaire = createTeam({
  confederation: 'CONCACAF',
  country: 'Bonaire',
  names: [{ name: 'Bonaire', period: '1960-p.t.' }],
  flagsPeriod: ['1960-p.t.'],
  founded: '1960',
  fifa: '-',
  confederationDate: '2014',
})
