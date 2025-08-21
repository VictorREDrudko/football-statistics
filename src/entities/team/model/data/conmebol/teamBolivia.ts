import { createTeam } from '@/entities/team/lib'

export const teamBolivia = createTeam({
  confederation: 'CONMEBOL',
  country: 'Bolivia',
  names: [{ name: 'Bolivia', period: '1925-p.t.' }],
  flagsPeriod: ['1925-p.t.'],
  founded: '1925',
  fifa: '1926',
  confederationDate: '1926',
})
