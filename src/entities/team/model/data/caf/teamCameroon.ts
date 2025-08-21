import { createTeam } from '@/entities/team/lib'

export const teamCameroon = createTeam({
  confederation: 'CAF',
  country: 'Cameroon',
  names: [{ name: 'Cameroon', period: '1959-p.t.' }],
  flagsPeriod: ['1959-p.t.'],
  founded: '1959',
  fifa: '1962',
  confederationDate: '1963',
})
