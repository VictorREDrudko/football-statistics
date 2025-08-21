import { createTeam } from '@/entities/team/lib'

export const teamLebanon = createTeam({
  confederation: 'CAF',
  country: 'Lebanon',
  names: [{ name: 'Lebanon', period: '1933-p.t.' }],
  flagsPeriod: ['1933-p.t.'],
  founded: '1933',
  fifa: '1936',
  confederationDate: '1964',
})
