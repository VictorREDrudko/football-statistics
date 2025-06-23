import { Team } from '../../classTeam/classTeam'
import { flagLuxembourg } from '@/shared/assets/flags'
import { coatOfArmsLuxembourg } from '@/shared/assets/coat-of-arms'
import { iconLuxembourg } from '@/shared/assets/iconFootballAssociation'

export const teamLuxembourg = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Luxembourg', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLuxembourg, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLuxembourg,
  associationLogo: iconLuxembourg,
  associationDate: {
    founded: '1908',
    fifaAffiliation: '1910',
    confederationAffiliation: '1954',
  },
})