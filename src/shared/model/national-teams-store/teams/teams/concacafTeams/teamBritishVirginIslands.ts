import { Team } from '../../classTeam/classTeam'
import { flagBritishVirginIslands } from '@/shared/assets/image/flags'
import { coatOfArmsBritishVirginIslands } from '@/shared/assets/image/coat-of-arms'
import { iconBritishVirginIslands } from '@/shared/assets/iconFootballAssociation'

export const teamBritishVirginIslands = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'British Virgin Islands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBritishVirginIslands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBritishVirginIslands,
  associationLogo: iconBritishVirginIslands,
  associationDate: {
    founded: '1974',
    fifaAffiliation: '1996',
    confederationAffiliation: '1996',
  },
})