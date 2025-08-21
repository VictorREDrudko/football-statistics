import { createTeam } from '@/entities/team/lib'

export const teamTrinidadAndTobago = createTeam({
  confederation: 'CONCACAF',
  country: 'Trinidad & Tobago',
  names: [{ name: 'Trinidad & Tobago', period: '1908-p.t.' }],
  flagsPeriod: ['1908-p.t.'],
  founded: '1908',
  fifa: '1964',
  confederationDate: '1964',
})
