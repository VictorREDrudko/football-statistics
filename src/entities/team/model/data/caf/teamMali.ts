import { createTeam } from '@/entities/team/lib'

export const teamMali = createTeam({
  confederation: 'CAF',
  country: 'Mali',
  names: [{ name: 'Mali', period: '1960-p.t.' }],
  flagsPeriod: ['1960-p.t.'],
  founded: '1960',
  fifa: '1963',
  confederationDate: '1963',
})
