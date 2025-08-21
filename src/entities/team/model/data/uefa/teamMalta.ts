import { createTeam } from '@/entities/team/lib'

export const teamMalta = createTeam({
  confederation: 'UEFA',
  country: 'Malta',
  names: [{ name: 'Malta', period: '1900-p.t.' }],
  flagsPeriod: ['1900-p.t.'],
  founded: '1900',
  fifa: '1959',
  confederationDate: '1960',
})
