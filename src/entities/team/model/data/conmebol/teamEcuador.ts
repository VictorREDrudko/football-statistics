import { createTeam } from '@/entities/team/lib'

export const teamEcuador = createTeam({
  confederation: 'CONMEBOL',
  country: 'Ecuador',
  names: [{ name: 'Ecuador', period: '1925-p.t.' }],
  flagsPeriod: ['1925-p.t.'],
  founded: '1925',
  fifa: '1926',
  confederationDate: '1927',
})
