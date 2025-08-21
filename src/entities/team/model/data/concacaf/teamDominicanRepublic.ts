import { createTeam } from '@/entities/team/lib'

export const teamDominicanRepublic = createTeam({
  confederation: 'CONCACAF',
  country: 'Dominican Republic',
  names: [{ name: 'Dominican Republic', period: '1953-p.t.' }],
  flagsPeriod: ['1953-p.t.'],
  founded: '1953',
  fifa: '1958',
  confederationDate: '1964',
})
