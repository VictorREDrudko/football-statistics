import { Team } from '../../classTeam/classTeam'
import { flagUganda } from '@/shared/assets/image/flags'
import { coatOfArmsUganda } from '@/shared/assets/image/coat-of-arms'
import { iconUganda } from '@/shared/assets/iconFootballAssociation'

export const teamUganda = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Uganda', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagUganda, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsUganda,
  associationLogo: iconUganda,
  associationDate: {
    founded: '1924',
    fifaAffiliation: '1960',
    confederationAffiliation: '1960',
  },
})