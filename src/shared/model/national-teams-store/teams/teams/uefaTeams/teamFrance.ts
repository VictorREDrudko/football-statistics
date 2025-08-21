import { Team } from '../../classTeam/classTeam'
import { flagFrance } from '@/shared/assets/image/flags'
import { coatOfArmsFrance } from '@/shared/assets/image/coat-of-arms'
import { iconFrance } from '@/shared/assets/iconFootballAssociation'

export const teamFrance = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'France', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagFrance, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsFrance,
  associationLogo: iconFrance,
  associationDate: {
    founded: '1919',
    fifaAffiliation: '1919',
    confederationAffiliation: '1954',
  },
})
