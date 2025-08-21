import { createTeam } from '@/entities/team/lib'

export const teamDRCongo = createTeam({
  confederation: 'CAF',
  country: 'DR Congo',
  names: [
    { name: 'DR Congo', period: '1998-p.t.' },
    { name: 'Zaire', period: '1971-1997' },
  ],
  flagsPeriod: ['1919-1970, 1998-p.t.', '1971-1997'],
  founded: '1919',
  fifa: '1964',
  confederationDate: '1964',
})
