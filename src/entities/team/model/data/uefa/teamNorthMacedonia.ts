import { createTeam } from '@/entities/team/lib'

export const teamNorthMacedonia = createTeam({
  confederation: 'UEFA',
  country: 'North Macedonia',
  names: [
    { name: 'Macedonia', period: '1926-2018' },
    { name: 'North Macedonia', period: '2019-p.t.' },
  ],
  flagsPeriod: ['1926-p.t.'],
  founded: '1926',
  fifa: '1994',
  confederationDate: '1994',
})
