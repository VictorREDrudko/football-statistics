import { createTeam } from "@/entities/team/lib";

export const teamMongolia = createTeam({
  confederation: 'CAF',
  country: 'Mongolia',
  names: [{ name: 'Mongolia', period: '1959-p.t.' }],
  flagsPeriod: ['1959-p.t.'],
  founded: '1959',
  fifa: '1998',
  confederationDate: '1993',
})
