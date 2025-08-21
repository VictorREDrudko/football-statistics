import { Team } from '../../classTeam/classTeam'
import { flagSweden } from '@/shared/assets/image/flags'
import { coatOfArmsSweden } from '@/shared/assets/image/coat-of-arms'
import { iconSweden } from '@/shared/assets/iconFootballAssociation'

export const teamSweden = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Sweden', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSweden, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSweden,
  associationLogo: iconSweden,
  associationDate: {
    founded: '1904',
    fifaAffiliation: '1904',
    confederationAffiliation: '1954',
  },
})