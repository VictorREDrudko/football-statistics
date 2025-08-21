import { createTeam } from '@/entities/team/lib'

export const teamBurundi = createTeam({
  confederation: 'CAF',
  country: 'Burundi',
  names: [{ name: 'Burundi', period: '1948-p.t.' }],
  flagsPeriod: ['1948-p.t.'],
  founded: '1948',
  fifa: '1972',
  confederationDate: '1972',
})
