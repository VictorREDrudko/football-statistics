import { Team } from '../../classTeam/classTeam'
import { flagEastGermany } from '@/shared/assets/image/flags'
import { coatOfArmsEastGermany } from '@/shared/assets/image/coat-of-arms'
import { iconEastGermany } from '@/shared/assets/iconFootballAssociation'

export const teamEastGermany = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'East Germany', period: '1950-1990' }],
  flags: [{ countryFlag: flagEastGermany, period: '1950-1990, 1990-p.t.' }],
  coatOfArms: coatOfArmsEastGermany,
  associationLogo: iconEastGermany,
  associationDate: {
    founded: '1950',
    fifaAffiliation: '1952',
    confederationAffiliation: '1954',
  },
  isCountryReal: false,
})