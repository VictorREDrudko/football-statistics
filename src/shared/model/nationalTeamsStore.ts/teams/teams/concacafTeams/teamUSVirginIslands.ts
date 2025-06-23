import { Team } from '../../classTeam/classTeam'
import { flagUSVirginIslands } from '@/shared/assets/flags'
import { coatOfArmsUSVirginIslands } from '@/shared/assets/coat-of-arms'
import { iconUSVirginIslands } from '@/shared/assets/iconFootballAssociation'

export const teamUSVirginIslands = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'U.S. Virgin Islands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagUSVirginIslands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsUSVirginIslands,
  associationLogo: iconUSVirginIslands,
  associationDate: {
    founded: '1987',
    fifaAffiliation: '1998',
    confederationAffiliation: '1987',
  },
})