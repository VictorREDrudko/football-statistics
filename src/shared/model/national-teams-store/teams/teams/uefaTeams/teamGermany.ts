import { Team } from '../../classTeam/classTeam'
import { flagGermany } from '@/shared/assets/flags'
import { coatOfArmsGermany } from '@/shared/assets/coat-of-arms'
import { iconGermany } from '@/shared/assets/iconFootballAssociation'

export const teamGermany = new Team({
  confederation: 'UEFA',
  names: [
    { nameCountry: 'Germany', period: '1990-p.t.' },
    { nameCountry: 'German Reich', period: '1919-1945' },
    { nameCountry: 'West Germany', period: '1946-1989' },
  ],
  flags: [{ countryFlag: flagGermany, period: '1919-1932, 1946-p.t.' }],
  coatOfArms: coatOfArmsGermany,
  associationLogo: iconGermany,
  associationDate: {
    founded: '1900',
    fifaAffiliation: '1904',
    confederationAffiliation: '1954',
  },
})
