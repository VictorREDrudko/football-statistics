import { createTeam } from '@/entities/team/lib'

export const teamCzechRepublic = createTeam({
  confederation: 'UEFA',
  country: 'Czech Republic',
  names: [{ name: 'Czech Republic', period: '1993-p.t.' }],
  flagsPeriod: ['1993-p.t.'],
  founded: '1901',
  fifa: '1994',
  confederationDate: '1993',
})
