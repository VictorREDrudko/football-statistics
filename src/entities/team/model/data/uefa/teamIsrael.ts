import { createTeam } from '@/entities/team/lib'

export const teamIsrael = createTeam({
  confederation: 'UEFA',
  country: 'Israel',
  names: [{ name: 'Israel', period: '1928-p.t.' }],
  flagsPeriod: ['1928-p.t.'],
  founded: '1928',
  fifa: '1929',
  confederationDate: '1994',
})
