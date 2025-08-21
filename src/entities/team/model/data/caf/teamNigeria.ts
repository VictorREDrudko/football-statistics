import { createTeam } from '@/entities/team/lib'

export const teamNigeria = createTeam({
  confederation: 'CAF',
  country: 'Nigeria',
  names: [{ name: 'Nigeria', period: '1945-p.t.' }],
  flagsPeriod: ['1945-p.t.'],
  founded: '1945',
  fifa: '1960',
  confederationDate: '1960',
})
