import { createTeam } from '@/entities/team/lib'

export const teamPuertoRico = createTeam({
  confederation: 'CONCACAF',
  country: 'Puerto Rico',
  names: [{ name: 'Puerto Rico', period: '1940-p.t.' }],
  flagsPeriod: ['1940-p.t.'],
  founded: '1940',
  fifa: '1960',
  confederationDate: '1964',
})
