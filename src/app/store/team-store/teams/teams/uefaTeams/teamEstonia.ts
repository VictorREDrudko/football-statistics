import { Team } from '../../classTeam/classTeam'
import { flagEstonia } from '@/shared/assets/image/flags'
import { coatOfArmsEstonia } from '@/shared/assets/image/coat-of-arms'
import { iconEstonia } from '@/shared/assets/iconFootballAssociation'

export const teamEstonia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Estonia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagEstonia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsEstonia,
  associationLogo: iconEstonia,
  associationDate: {
    founded: '1921',
    fifaAffiliation: '1923',
    confederationAffiliation: '1992',
  },
})
