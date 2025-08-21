import { createTeam } from '@/entities/team/lib'

export const teamArmenia = createTeam({
  confederation: 'UEFA',
  country: 'Armenia',
  names: [{ name: 'Armenia', period: '1992-p.t.' }],
  flagsPeriod: ['1992-p.t.'],
  founded: '1992',
  fifa: '1992',
  confederationDate: '1992',
})
