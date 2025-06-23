import { Team } from '../../classTeam/classTeam'
import { flagTonga } from '@/shared/assets/flags'
import { coatOfArmsTonga } from '@/shared/assets/coat-of-arms'
import { iconTonga } from '@/shared/assets/iconFootballAssociation'

export const teamTonga = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Tonga', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTonga, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTonga,
  associationLogo: iconTonga,
  associationDate: {
    founded: '1965',
    fifaAffiliation: '1994',
    confederationAffiliation: '1994',
  },
})