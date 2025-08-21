import { createTeam } from '@/entities/team/lib'

export const teamGermany = createTeam({
  confederation: 'UEFA',
  country: 'Germany',
  names: [
    { name: 'Germany', period: '1990-p.t.' },
    { name: 'German Reich', period: '1919-1945' },
    { name: 'West Germany', period: '1946-1989' },
  ],
  flagsPeriod: ['1919-1932, 1946-p.t.'],
  founded: '1900',
  fifa: '1904',
  confederationDate: '1954',
})
