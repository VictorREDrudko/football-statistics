import { createTeam } from '@/entities/team/lib'

export const teamNicaragua = createTeam({
  confederation: 'CONCACAF',
  country: 'Nicaragua',
  names: [{ name: 'Nicaragua', period: '1931-p.t.' }],
  flagsPeriod: ['1931-p.t.'],
  founded: '1931',
  fifa: '1950',
  confederationDate: '1961',
})
