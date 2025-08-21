import { createTeam } from '@/entities/team/lib'

export const teamBotswana = createTeam({
  confederation: 'CAF',
  country: 'Botswana',
  names: [{ name: 'Botswana', period: '1970-p.t.' }],
  flagsPeriod: ['1970-p.t.'],
  founded: '1970',
  fifa: '1978',
  confederationDate: '1976',
})
