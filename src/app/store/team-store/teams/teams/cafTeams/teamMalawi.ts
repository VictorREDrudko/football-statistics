import { Team } from '../../classTeam/classTeam'
import { flagMalawi } from '@/shared/assets/image/flags'
import { coatOfArmsMalawi } from '@/shared/assets/image/coat-of-arms'
import { iconMalawi } from '@/shared/assets/iconFootballAssociation'

export const teamMalawi = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Malawi', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMalawi, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMalawi,
  associationLogo: iconMalawi,
  associationDate: {
    founded: '1966',
    fifaAffiliation: '1968',
    confederationAffiliation: '1968',
  },
})