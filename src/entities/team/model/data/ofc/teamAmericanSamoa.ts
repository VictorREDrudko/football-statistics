import { createTeam } from '@/entities/team/lib'

export const teamAmericanSamoa = createTeam({
  confederation: 'OFC',
  country: 'American Samoa',
  names: [{ name: 'American Samoa', period: '1984-p.t.' }],
  flagsPeriod: ['1984-p.t.'],
  founded: '1984',
  fifa: '1998',
  confederationDate: '1998',
})
