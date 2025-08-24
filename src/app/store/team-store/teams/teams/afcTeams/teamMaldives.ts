import { Team } from '../../classTeam/classTeam'
import { flagMaldives } from '@/shared/assets/image/flags'
import { coatOfArmsMaldives } from '@/shared/assets/image/coat-of-arms'
import { iconMaldives } from '@/shared/assets/iconFootballAssociation'

export const teamMaldives = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Maldives', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMaldives, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMaldives,
  associationLogo: iconMaldives,
  associationDate: {
    founded: '1982',
    fifaAffiliation: '1986',
    confederationAffiliation: '1984',
  },
})