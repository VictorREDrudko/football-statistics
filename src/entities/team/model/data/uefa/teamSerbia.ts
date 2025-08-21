import { createTeam } from '@/entities/team/lib'

export const teamSerbia = createTeam({
  confederation: 'UEFA',
  country: 'Serbia',
  names: [
    { name: 'Serbia', period: '2007-p.t.' },
    { name: 'FR Yugoslavia', period: '1992-2002' },
    { name: 'Serbia and Montenegro', period: '2003-2006' },
  ],
  flagsPeriod: ['2006-p.t.', '1992-2005'],
  founded: '1919',
  fifa: '1921',
  confederationDate: '1954',
})
