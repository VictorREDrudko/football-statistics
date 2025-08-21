import { createTeam } from '@/entities/team/lib'

export const teamUganda = createTeam({
  confederation: 'CAF',
  country: 'Uganda',
  names: [{ name: 'Uganda', period: '1924-p.t.' }],
  flagsPeriod: ['1924-p.t.'],
  founded: '1924',
  fifa: '1960',
  confederationDate: '1960',
})
