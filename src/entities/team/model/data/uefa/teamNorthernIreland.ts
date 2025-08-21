import { createTeam } from '@/entities/team/lib'

export const teamNorthIreland = createTeam({
  confederation: 'UEFA',
  country: 'North. Ireland',
  names: [{ name: 'North. Ireland', period: '1880-p.t.' }],
  flagsPeriod: ['1880-p.t.'],
  founded: '1880',
  fifa: '1911',
  confederationDate: '1954',
})
