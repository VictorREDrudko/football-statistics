import { createTeam } from '@/entities/team/lib'

export const teamGermany = createTeam({
  confederation: 'UEFA',
  country: 'Germany',
  names: [
    { name: 'Germany', period: '1990-p.t.' },
    { name: 'German Empire', period: '1900-1918' },
    { name: 'German Reich', period: '1919-1945' },
    { name: 'West Germany', period: '1946-1989' },
  ],
  flagsPeriod: ['1919-1932, 1946-p.t.', '1900-1918, 1933-1934', '1935-1945'],
  founded: '1900',
  fifa: '1904',
  confederationDate: '1954',
})
