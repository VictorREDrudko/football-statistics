import { Team } from '../../classTeam/classTeam'
import { flagSovietUnion } from '@/shared/assets/flags'
import { coatOfArmsSovietUnion } from '@/shared/assets/coat-of-arms'
import { iconSovietUnion } from '@/shared/assets/iconFootballAssociation'

export const teamSovietUnion = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Soviet Union', period: '0000-1991' }],
  flags: [{ countryFlag: flagSovietUnion, period: '0000-1991, 1991-p.t.' }],
  coatOfArms: coatOfArmsSovietUnion,
  associationLogo: iconSovietUnion,
  associationDate: {
    founded: '1934',
    fifaAffiliation: '1946',
    confederationAffiliation: '1954',
  },
  isCountryReal: false,
})