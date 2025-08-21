import { createTeam } from '@/entities/team/lib'

export const teamGeorgia = createTeam({
  confederation: 'UEFA',
  country: 'Georgia',
  names: [{ name: 'Georgia', period: '1990-p.t.' }],
  flagsPeriod: ['1990-p.t.'],
  founded: '1990',
  fifa: '1992',
  confederationDate: '1992',
})
