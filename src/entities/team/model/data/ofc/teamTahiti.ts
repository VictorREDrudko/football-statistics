import { createTeam } from '@/entities/team/lib'

export const teamTahiti = createTeam({
  confederation: 'OFC',
  country: 'Tahiti',
  names: [{ name: 'Tahiti', period: '1989-p.t.' }],
  flagsPeriod: ['1989-p.t.'],
  founded: '1989',
  fifa: '1990',
  confederationDate: '1990',
})
