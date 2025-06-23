import { Team } from '../../classTeam/classTeam'
import { flagBelgium } from '@/shared/assets/flags'
import { coatOfArmsBelgium } from '@/shared/assets/coat-of-arms'
import { iconBelgium } from '@/shared/assets/iconFootballAssociation'

export const teamBelgium = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Belgium', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBelgium, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBelgium,
  associationLogo: iconBelgium,
  associationDate: {
    founded: '1895',
    fifaAffiliation: '1904',
    confederationAffiliation: '1954',
  },
})
