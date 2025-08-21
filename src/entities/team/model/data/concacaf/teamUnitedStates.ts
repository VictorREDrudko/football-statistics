import { createTeam } from '@/entities/team/lib'

export const teamUnitedStates = createTeam({
  confederation: 'CONCACAF',
  country: 'United States',
  names: [{ name: 'United States', period: '1913-p.t.' }],
  flagsPeriod: ['1913-p.t.'],
  founded: '1913',
  fifa: '1914',
  confederationDate: '1961',
})
