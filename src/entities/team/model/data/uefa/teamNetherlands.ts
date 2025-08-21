import { createTeam } from '@/entities/team/lib'

export const teamNetherlands = createTeam({
  confederation: 'UEFA',
  country: 'Netherlands',
  names: [{ name: 'Netherlands', period: '1889-p.t.' }],
  flagsPeriod: ['1919-p.t.'],
  founded: '1889',
  fifa: '1904',
  confederationDate: '1954',
})
