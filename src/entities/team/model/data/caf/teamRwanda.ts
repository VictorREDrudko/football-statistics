import { createTeam } from '@/entities/team/lib'

export const teamRwanda = createTeam({
  confederation: 'CAF',
  country: 'Rwanda',
  names: [{ name: 'Rwanda', period: '1972-p.t.' }],
  flagsPeriod: ['1972-p.t.'],
  founded: '1972',
  fifa: '1978',
  confederationDate: '1978',
})
