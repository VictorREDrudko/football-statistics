import { createTeam } from '@/entities/team/lib'

export const teamColombia = createTeam({
  confederation: 'CONMEBOL',
  country: 'Colombia',
  names: [{ name: 'Colombia', period: '1924-p.t.' }],
  flagsPeriod: ['1924-p.t.'],
  founded: '1924',
  fifa: '1936',
  confederationDate: '1936',
})
