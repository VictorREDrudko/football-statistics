import { createTeam } from '@/entities/team/lib'

export const teamBurkinaFaso = createTeam({
  confederation: 'CAF',
  country: 'Burkina Faso',
  names: [{ name: 'Burkina Faso', period: '1960-p.t.' }],
  flagsPeriod: ['1960-p.t.'],
  founded: '1960',
  fifa: '1964',
  confederationDate: '1964',
})
