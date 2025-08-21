import { createTeam } from '@/entities/team/lib'

export const teamIndonesia = createTeam({
  confederation: 'CAF',
  country: 'Indonesia',
  names: [
    { name: 'Indonesia', period: '1949-p.t.' },
    { name: 'D.East Indies', period: '1930-1948' },
  ],
  flagsPeriod: ['1949-p.t.', '1930-1948'],
  founded: '1930',
  fifa: '1952',
  confederationDate: '1954',
})
