import { createTeam } from '@/entities/team/lib'

export const teamHungary = createTeam({
  confederation: 'UEFA',
  country: 'Hungary',
  names: [{ name: 'Hungary', period: '1901-p.t.' }],
  flagsPeriod: ['1957-p.t.', '1919-1945', '1946-1948', '1949-1956'],
  founded: '1901',
  fifa: '1906',
  confederationDate: '1954',
})
