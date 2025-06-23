import { Team } from '../../classTeam/classTeam'
import { flagDenmark } from '@/shared/assets/flags'
import { coatOfArmsDenmark } from '@/shared/assets/coat-of-arms'
import { iconDenmark } from '@/shared/assets/iconFootballAssociation'

export const teamDenmark = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Denmark', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagDenmark, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsDenmark,
  associationLogo: iconDenmark,
  associationDate: {
    founded: '1889',
    fifaAffiliation: '1904',
    confederationAffiliation: '1954',
  },
})
