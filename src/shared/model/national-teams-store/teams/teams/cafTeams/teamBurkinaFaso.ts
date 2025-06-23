import { Team } from '../../classTeam/classTeam'
import { flagBurkinaFaso } from '@/shared/assets/flags'
import { coatOfArmsBurkinaFaso } from '@/shared/assets/coat-of-arms'
import { iconBurkinaFaso } from '@/shared/assets/iconFootballAssociation'

export const teamBurkinaFaso = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Burkina Faso', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBurkinaFaso, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBurkinaFaso,
  associationLogo: iconBurkinaFaso,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})