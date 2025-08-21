import { createTeam } from '@/entities/team/lib'

export const teamBenin = createTeam({
  confederation: 'CAF',
  country: 'Benin',
  names: [{ name: 'Benin', period: '1962-p.t.' }],
  flagsPeriod: ['1962-p.t.'],
  founded: '1962',
  fifa: '1962',
  confederationDate: '1962',
})
