import { createTeam } from '@/entities/team/lib'

export const teamGuinea = createTeam({
  confederation: 'CAF',
  country: 'Guinea',
  names: [{ name: 'Guinea', period: '1960-p.t.' }],
  flagsPeriod: ['1960-p.t.'],
  founded: '1960',
  fifa: '1962',
  confederationDate: '1963',
})
