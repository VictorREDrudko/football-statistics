import { createTeam } from '@/entities/team/lib'

export const teamEthiopia = createTeam({
  confederation: 'CAF',
  country: 'Ethiopia',
  names: [{ name: 'Ethiopia', period: '1943-p.t.' }],
  flagsPeriod: ['1943-p.t.'],
  founded: '1943',
  fifa: '1952',
  confederationDate: '1957',
})
