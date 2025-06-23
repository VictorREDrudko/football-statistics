import { Team } from '../../classTeam/classTeam'
import { flagCzechoslovakia } from '@/shared/assets/flags'
import { coatOfArmsCzechoslovakia } from '@/shared/assets/coat-of-arms'
import { iconCzechoslovakia } from '@/shared/assets/iconFootballAssociation'

export const teamCzechoslovakia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Czechoslovakia', period: '0000-1992' }],
  flags: [{ countryFlag: flagCzechoslovakia, period: '0000-1992, 2006-p.t.' }],
  coatOfArms: coatOfArmsCzechoslovakia,
  associationLogo: iconCzechoslovakia,
  associationDate: {
    founded: '1901',
    fifaAffiliation: '1907',
    confederationAffiliation: '1954',
  },
  isCountryReal: false,
})