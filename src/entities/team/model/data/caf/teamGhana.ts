import { createTeam } from '@/entities/team/lib'

export const teamGhana = createTeam({
  confederation: 'CAF',
  country: 'Ghana',
  names: [{ name: 'Ghana', period: '1957-p.t.' }],
  flagsPeriod: ['1957-p.t.'],
  founded: '1957',
  fifa: '1958',
  confederationDate: '1958',
})
