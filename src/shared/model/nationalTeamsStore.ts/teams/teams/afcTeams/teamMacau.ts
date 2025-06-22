import { Team } from '../../classTeam/classTeam'
import { flagMacau } from '@/shared/assets/flags'
import { coatOfArmsMacau } from '@/shared/assets/coat-of-arms'
import { iconMacau } from '@/shared/assets/iconFootballAssociation'

export const teamMacau = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Macau', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMacau, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMacau,
  associationLogo: iconMacau,
  associationDate: {
    founded: '1939',
    fifaAffiliation: '1978',
    confederationAffiliation: '1978',
  },
})