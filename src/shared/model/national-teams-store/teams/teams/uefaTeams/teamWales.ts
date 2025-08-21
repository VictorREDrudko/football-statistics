import { Team } from '../../classTeam/classTeam'
import { flagWales, flagWales2 } from '@/shared/assets/image/flags'
import { coatOfArmsWales } from '@/shared/assets/image/coat-of-arms'
import { iconWales } from '@/shared/assets/iconFootballAssociation'

export const teamWales = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Wales', period: '0000-p.t.' }],
  flags: [
    { countryFlag: flagWales, period: '1910-1952, 1959-p.t.' },
    { countryFlag: flagWales2, period: '1953-1958' },
  ],
  coatOfArms: coatOfArmsWales,
  associationLogo: iconWales,
  associationDate: {
    founded: '1876',
    fifaAffiliation: '1910',
    confederationAffiliation: '1954',
  },
})