import { Team } from '../../classTeam/classTeam'
import { flagTurkmenistan } from '@/shared/assets/flags'
import { coatOfArmsTurkmenistan } from '@/shared/assets/coat-of-arms'
import { iconTurkmenistan } from '@/shared/assets/iconFootballAssociation'

export const teamTurkmenistan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Turkmenistan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTurkmenistan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTurkmenistan,
  associationLogo: iconTurkmenistan,
  associationDate: {
    founded: '1992',
    fifaAffiliation: '1994',
    confederationAffiliation: '1993',
  },
})