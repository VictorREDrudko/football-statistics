import { createTeam } from '@/entities/team/lib'

export const teamSomalia = createTeam({
  confederation: 'CAF',
  country: 'Somalia',
  names: [{ name: 'Somalia', period: '1951-p.t.' }],
  flagsPeriod: ['1951-p.t.'],
  founded: '1951',
  fifa: '1962',
  confederationDate: '1968',
})
