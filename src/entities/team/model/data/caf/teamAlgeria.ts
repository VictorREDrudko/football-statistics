import { createTeam } from '@/entities/team/lib'

export const teamAlgeria = createTeam({
  confederation: 'CAF',
  country: 'Algeria',
  names: [{ name: 'Algeria', period: '1962-p.t.' }],
  flagsPeriod: ['1962-p.t.'],
  founded: '1962',
  fifa: '1963',
  confederationDate: '1964',
})
