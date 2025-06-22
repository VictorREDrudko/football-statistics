import { Team } from '../../classTeam/classTeam'
import { flagSudan } from '@/shared/assets/flags'
import { coatOfArmsSudan } from '@/shared/assets/coat-of-arms'
import { iconSudan } from '@/shared/assets/iconFootballAssociation'

export const teamSudan = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Sudan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSudan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSudan,
  associationLogo: iconSudan,
  associationDate: {
    founded: '1936',
    fifaAffiliation: '1948',
    confederationAffiliation: '1957',
  },
})