import { createTeam } from '@/entities/team/lib'

export const teamChile = createTeam({
  confederation: 'CONMEBOL',
  country: 'Chile',
  names: [{ name: 'Chile', period: '1895-p.t.' }],
  flagsPeriod: ['1895-p.t.'],
  founded: '1895',
  fifa: '1913',
  confederationDate: '1916',
})
