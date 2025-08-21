import { createTeam } from '@/entities/team/lib'

export const teamSamoa = createTeam({
  confederation: 'OFC',
  country: 'Samoa',
  names: [{ name: 'Samoa', period: '1968-p.t.' }],
  flagsPeriod: ['1968-p.t.'],
  founded: '1968',
  fifa: '1986',
  confederationDate: '1986',
})
