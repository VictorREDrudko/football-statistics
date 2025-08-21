import { createTeam } from '@/entities/team/lib'

export const teamSpain = createTeam({
  confederation: 'UEFA',
  country: 'Spain',
  names: [{ name: 'Spain', period: '1913-p.t.' }],
  flagsPeriod: [
    '1981-p.t.',
    '1931-1935',
    '1936-1936, 1978-1978',
    '1937-1937',
    '1938-1945',
    '1946-1976',
    '1977-1980',
  ],
  founded: '1913',
  fifa: '1914',
  confederationDate: '1954',
})
