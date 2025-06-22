import { Team } from '../../classTeam/classTeam'
import { flagPakistan } from '@/shared/assets/flags'
import { coatOfArmsPakistan } from '@/shared/assets/coat-of-arms'
import { iconPakistan } from '@/shared/assets/iconFootballAssociation'

export const teamPakistan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Pakistan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPakistan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPakistan,
  associationLogo: iconPakistan,
  associationDate: {
    founded: '1947',
    fifaAffiliation: '1948',
    confederationAffiliation: '1954',
  },
})