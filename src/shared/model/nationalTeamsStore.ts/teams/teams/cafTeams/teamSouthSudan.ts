import { Team } from '../../classTeam/classTeam'
import { flagSouthSudan } from '@/shared/assets/flags'
import { coatOfArmsSouthSudan } from '@/shared/assets/coat-of-arms'
import { iconSouthSudan } from '@/shared/assets/iconFootballAssociation'

export const teamSouthSudan = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'South Sudan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSouthSudan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSouthSudan,
  associationLogo: iconSouthSudan,
  associationDate: {
    founded: '2011',
    fifaAffiliation: '2012',
    confederationAffiliation: '2012',
  },
})