import { Team } from '../../classTeam/classTeam'
import { flagSlovenia } from '@/shared/assets/flags'
import { coatOfArmsSlovenia } from '@/shared/assets/coat-of-arms'
import { iconSlovenia } from '@/shared/assets/iconFootballAssociation'

export const teamSlovenia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Slovenia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSlovenia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSlovenia,
  associationLogo: iconSlovenia,
  associationDate: {
    founded: '1920',
    fifaAffiliation: '1992',
    confederationAffiliation: '1992',
  },
})