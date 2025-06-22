import { Team } from '../../classTeam/classTeam'
import { flagLiechtenstein } from '@/shared/assets/flags'
import { coatOfArmsLiechtenstein } from '@/shared/assets/coat-of-arms'
import { iconLiechtenstein } from '@/shared/assets/iconFootballAssociation'

export const teamLiechtenstein = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Liechtenstein', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLiechtenstein, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLiechtenstein,
  associationLogo: iconLiechtenstein,
  associationDate: {
    founded: '1934',
    fifaAffiliation: '1974',
    confederationAffiliation: '1974',
  },
})