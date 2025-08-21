import { createTeam } from '@/entities/team/lib'

export const teamBosniaAndHerzegovina = createTeam({
  confederation: 'UEFA',
  country: 'Bosnia and Herzegovina',
  names: [{ name: 'Bosnia and Herzegovina', period: '1920-p.t.' }],
  flagsPeriod: ['1920-p.t.'],
  founded: '1920',
  fifa: '1996',
  confederationDate: '1998',
})
