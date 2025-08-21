import { createTeam } from '@/entities/team/lib'

export const teamSlovenia = createTeam({
  confederation: 'UEFA',
  country: 'Slovenia',
  names: [{ name: 'Slovenia', period: '1920-1991' }],
  flagsPeriod: ['1920-1991'],
  founded: '1920',
  fifa: '1992',
  confederationDate: '1992',
})
