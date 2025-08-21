import { Team } from '../../classTeam/classTeam'
import { flagVenezuela } from '@/shared/assets/image/flags'
import { coatOfArmsVenezuela } from '@/shared/assets/image/coat-of-arms'
import { iconVenezuela } from '@/shared/assets/iconFootballAssociation'

export const teamVenezuela = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Venezuela', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagVenezuela, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsVenezuela,
  associationLogo: iconVenezuela,
  associationDate: {
    founded: '1925',
    fifaAffiliation: '1952',
    confederationAffiliation: '1953',
  },
})