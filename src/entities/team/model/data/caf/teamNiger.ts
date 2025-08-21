import { createTeam } from '@/entities/team/lib'

export const teamNiger = createTeam({
  confederation: 'CAF',
  country: 'Niger',
  names: [{ name: 'Niger', period: '1962-p.t.' }],
  flagsPeriod: ['1962-p.t.'],
  founded: '1962',
  fifa: '1967',
  confederationDate: '1967',
})
