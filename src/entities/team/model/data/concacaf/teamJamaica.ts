import { createTeam } from '@/entities/team/lib'

export const teamJamaica = createTeam({
  confederation: 'CONCACAF',
  country: 'Jamaica',
  names: [{ name: 'Jamaica', period: '1910-p.t.' }],
  flagsPeriod: ['1910-p.t.'],
  founded: '1910',
  fifa: '1962',
  confederationDate: '1963',
})
