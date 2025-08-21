import { Team } from '../../classTeam/classTeam'
import { flagAustria } from '@/shared/assets/image/flags'
import { coatOfArmsAustria } from '@/shared/assets/image/coat-of-arms'
import { iconAustria } from '@/shared/assets/iconFootballAssociation'

export const teamAustria = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Austria', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAustria, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAustria,
  associationLogo: iconAustria,
  associationDate: {
    founded: '1904',
    fifaAffiliation: '1905',
    confederationAffiliation: '1954',
  },
})
