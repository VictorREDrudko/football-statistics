import { Team } from '../../classTeam/classTeam'
import { flagMauritius } from '@/shared/assets/flags'
import { coatOfArmsMauritius } from '@/shared/assets/coat-of-arms'
import { iconMauritius } from '@/shared/assets/iconFootballAssociation'

export const teamMauritius = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Mauritius', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMauritius, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMauritius,
  associationLogo: iconMauritius,
  associationDate: {
    founded: '1952',
    fifaAffiliation: '1964',
    confederationAffiliation: '1963',
  },
})