import { Team } from '../../classTeam/classTeam'
import { flagSouthAfrica } from '@/shared/assets/image/flags'
import { coatOfArmsSouthAfrica } from '@/shared/assets/image/coat-of-arms'
import { iconSouthAfrica } from '@/shared/assets/iconFootballAssociation'

export const teamSouthAfrica = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'South Africa', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSouthAfrica, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSouthAfrica,
  associationLogo: iconSouthAfrica,
  associationDate: {
    founded: '1991',
    fifaAffiliation: '1992',
    confederationAffiliation: '1992',
  },
})