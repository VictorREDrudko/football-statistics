import { Team } from '../../classTeam/classTeam'
import { flagTaiwan } from '@/shared/assets/image/flags'
import { coatOfArmsTaiwan } from '@/shared/assets/image/coat-of-arms'
import { iconTaiwan } from '@/shared/assets/iconFootballAssociation'

export const teamTaiwan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Taiwan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTaiwan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTaiwan,
  associationLogo: iconTaiwan,
  associationDate: {
    founded: '1936',
    fifaAffiliation: '1954',
    confederationAffiliation: '1954',
  },
})