import { createTeam } from '@/entities/team/lib'

export const teamCambodia = createTeam({
  confederation: 'CAF',
  country: 'Cambodia',
  names: [{ name: 'Cambodia', period: '1933-p.t.' }],
  flagsPeriod: ['1933-p.t.'],
  founded: '1933',
  fifa: '1954',
  confederationDate: '1954',
})
