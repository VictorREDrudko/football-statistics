import { Team } from '../../classTeam/classTeam'
import { flagSwitzerland } from '@/shared/assets/image/flags'
import { coatOfArmsSwitzerland } from '@/shared/assets/image/coat-of-arms'
import { iconSwitzerland } from '@/shared/assets/iconFootballAssociation'

export const teamSwitzerland = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Switzerland', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSwitzerland, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSwitzerland,
  associationLogo: iconSwitzerland,
  associationDate: {
    founded: '1895',
    fifaAffiliation: '1904',
    confederationAffiliation: '1954',
  },
})