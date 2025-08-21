import { Team } from '../../classTeam/classTeam'
import { flagFiji } from '@/shared/assets/image/flags'
import { coatOfArmsFiji } from '@/shared/assets/image/coat-of-arms'
import { iconFiji } from '@/shared/assets/iconFootballAssociation'

export const teamFiji = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Fiji', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagFiji, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsFiji,
  associationLogo: iconFiji,
  associationDate: {
    founded: '1938',
    fifaAffiliation: '1964',
    confederationAffiliation: '1966',
  },
})