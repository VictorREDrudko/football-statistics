import { createTeam } from '@/entities/team/lib'

export const teamTanzania = createTeam({
  confederation: 'CAF',
  country: 'Tanzania',
  names: [{ name: 'Tanzania', period: '1930-p.t.' }],
  flagsPeriod: ['1930-p.t.'],
  founded: '1930',
  fifa: '1964',
  confederationDate: '1964',
})