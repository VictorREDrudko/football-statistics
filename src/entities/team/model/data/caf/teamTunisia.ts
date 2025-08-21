import { createTeam } from '@/entities/team/lib'

export const teamTunisia = createTeam({
  confederation: 'CAF',
  country: 'Tunisia',
  names: [{ name: 'Tunisia', period: '1957-p.t.' }],
  flagsPeriod: ['1957-p.t.'],
  founded: '1957',
  fifa: '1960',
  confederationDate: '1960',
})
