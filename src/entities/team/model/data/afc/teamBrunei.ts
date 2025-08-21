import { createTeam } from '@/entities/team/lib'

export const teamBrunei = createTeam({
  confederation: 'CAF',
  country: 'Brunei',
  names: [{ name: 'Brunei', period: '1952-p.t.' }],
  flagsPeriod: ['1952-p.t.'],
  founded: '1952',
  fifa: '1972',
  confederationDate: '1969',
})
