import { Team } from '../../classTeam/classTeam'
import { flagTajikistan } from '@/shared/assets/flags'
import { coatOfArmsTajikistan } from '@/shared/assets/coat-of-arms'
import { iconTajikistan } from '@/shared/assets/iconFootballAssociation'

export const teamTajikistan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Tajikistan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTajikistan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTajikistan,
  associationLogo: iconTajikistan,
  associationDate: {
    founded: '1936',
    fifaAffiliation: '1994',
    confederationAffiliation: '1993',
  },
})