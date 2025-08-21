import { createTeam } from '@/entities/team/lib'

export const teamBahrain = createTeam({
  confederation: 'CAF',
  country: 'Bahrain',
  names: [{ name: 'Bahrain', period: '1957-p.t.' }],
  flagsPeriod: ['1957-p.t.'],
  founded: '1957',
  fifa: '1968',
  confederationDate: '1969',
})
