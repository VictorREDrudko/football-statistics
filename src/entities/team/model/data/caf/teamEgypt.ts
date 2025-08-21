import { createTeam } from '@/entities/team/lib'

export const teamEgypt = createTeam({
  confederation: 'CAF',
  country: 'Egypt',
  names: [{ name: 'Egypt', period: '1921-p.t.' }],
  flagsPeriod: ['1984-p.t.', '1923-1957', '1958-1971', '1972-1983'],
  founded: '1921',
  fifa: '1923',
  confederationDate: '1957',
})
