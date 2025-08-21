import { createTeam } from '@/entities/team/lib'

export const teamIraq = createTeam({
  confederation: 'CAF',
  country: 'Iraq',
  names: [{ name: 'Iraq', period: '1948-p.t.' }],
  flagsPeriod: ['1948-p.t.'],
  founded: '1948',
  fifa: '1950',
  confederationDate: '1970',
})
